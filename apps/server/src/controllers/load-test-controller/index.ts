import { prisma, TestStatus } from "@blastapi/db";
import { newTestSchema, paginationSchema } from "@blastapi/validators";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validate as isValidUUID } from "uuid";
import { logger } from "@/lib/logger";
import { ApiError, AuthRequest } from "@/middleware";
import { getQueueService, getSocketService } from "@/services";

export class TestController {
  public async createTest(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;

    try {
      const testConfig = newTestSchema.parse(req.body);

      // Validate environment limits
      const maxConcurrentTests = parseInt(process.env.MAX_CONCURRENT_TESTS || "5");
      const maxVUsers = parseInt(process.env.MAX_VIRTUAL_USERS || "1000");
      const maxDuration = parseInt(process.env.MAX_TEST_DURATION || "480");

      // Check user's concurrent test limits
      const runningTests = await prisma.testRun.count({
        where: {
          userId,
          status: { in: ["Queued", "Running"] },
        },
      });

      if (runningTests >= maxConcurrentTests) {
        logger.warn(
          `User ${userId} exceeded concurrent test limit: ${runningTests}/${maxConcurrentTests}`,
        );
        throw new ApiError(
          `Maximum concurrent tests limit reached (${runningTests}/${maxConcurrentTests}). Please wait for current tests to complete.`,
          StatusCodes.TOO_MANY_REQUESTS,
        );
      }

      // Validate virtual users limit
      if (testConfig.vusers > maxVUsers) {
        throw new ApiError(
          `Virtual users limit exceeded. Requested: ${testConfig.vusers}, Maximum: ${maxVUsers}`,
          StatusCodes.BAD_REQUEST,
        );
      }

      // Validate test duration limit
      if (testConfig.duration > maxDuration) {
        throw new ApiError(
          `Test duration limit exceeded. Requested: ${testConfig.duration}s, Maximum: ${maxDuration}s`,
          StatusCodes.BAD_REQUEST,
        );
      }

      // Validate ramp-up configuration
      if (testConfig.rampUp >= testConfig.duration) {
        throw new ApiError(
          "Ramp-up time cannot be greater than or equal to test duration",
          StatusCodes.BAD_REQUEST,
        );
      }

      if (testConfig.rampUpSteps > testConfig.vusers) {
        throw new ApiError(
          "Ramp-up steps cannot exceed number of virtual users",
          StatusCodes.BAD_REQUEST,
        );
      }

      try {
        new URL(testConfig.url);
      } catch {
        throw new ApiError("Invalid URL format provided", StatusCodes.BAD_REQUEST);
      }

      // Create test run record with transaction
      const testRun = await prisma.$transaction(async tx => {
        const test = await tx.testRun.create({
          data: {
            userId,
            status: "Queued",
            testConfig: {
              create: {
                ...testConfig,
                concurrency: testConfig.vusers, // WIP: improve it (now, for compatibility)
                headers: testConfig.headers,
                body: testConfig.body,
              },
            },
          },
          select: {
            id: true,
            status: true,
            createdAt: true,
          },
        });

        return test;
      });

      // Add job to queue
      let job;
      try {
        const queueService = getQueueService();
        job = await queueService.addTestJob({
          testRunId: testRun.id,
          userId,
          config: {
            url: testConfig.url,
            method: testConfig.method,
            duration: testConfig.duration,
            vusers: testConfig.vusers,
            rampUp: testConfig.rampUp,
            rampUpSteps: testConfig.rampUpSteps,
            headers: testConfig.headers,
            body: testConfig.body,
          },
        });
      } catch (queueError) {
        // Rollback test creation if queue fails
        await prisma.testRun.update({
          where: { id: testRun.id },
          data: { status: "Failed" },
          select: { id: true },
        });

        logger.error(
          `Failed to enqueue test ${testRun.id}: ${queueError instanceof Error ? queueError.message : "Unknown error"}`,
        );
        throw new ApiError("Failed to queue test for execution", StatusCodes.INTERNAL_SERVER_ERROR);
      }

      // Emit test created event
      try {
        getSocketService().emitToUser(userId, "test:created", {
          testRun: {
            name: testConfig.name,
            duration: testConfig.duration,
            vusers: testConfig.vusers,
            rampUp: testConfig.rampUp,
            rampUpStesps: testConfig.rampUpSteps,
            ...testRun,
          },
          jobId: job.id,
        });
      } catch (socketError) {
        logger.warn(`Failed to emit test creation event: ${socketError}`);
      }

      logger.info(
        `Test created successfully: ${testRun.id} by user ${userId} (${testConfig.vusers} VUsers, ${testConfig.duration}s)`,
      );

      res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Load test created and queued successfully",
        data: {
          testRun: {
            id: testRun.id,
            status: testRun.status,
            createdAt: testRun.createdAt,
          },
          jobId: job.id,
          estimatedStartTime: testConfig.duration,
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to create test for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to create test", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async getTestRun(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const { id } = req.params;

    if (!id || !isValidUUID(id.trim())) {
      throw new ApiError("Invalid test run ID", StatusCodes.BAD_REQUEST);
    }

    try {
      const testRun = await prisma.testRun.findUnique({
        where: {
          id,
          userId,
        },
        select: {
          id: true,
          startedAt: true,
          healthCheckSummary: {
            select: {
              healthCheckResults: {
                select: {
                  checkName: true,
                  passed: true,
                  threshold: true,
                  actualValue: true,
                  failureDetails: true,
                },
                orderBy: { createdAt: "asc" },
              },
            },
          },
          errorInfos: {
            orderBy: { timestamp: "desc" },
            take: 10,
          },
          testResult: {
            select: {
              vusersCreated: true,
              successfulRequests: true,
              successRate: true,
              failedRequests: true,
              errorRate: true,
              avgThroughput: true,
              maxThroughput: true,
              minResponseTime: true,
              avgResponseTime: true,
              p50ResponseTime: true,
              p95ResponseTime: true,
              p99ResponseTime: true,
              maxResponseTime: true,
              statusCodes: true,
              // TODO: implement totalResponses
              // TODO: implement totalResponses
            },
          },
          testMetrics: true,
          testConfig: true,
          user: {
            select: {
              name: true,
              email: true,
              role: true,
              image: true,
            },
          },
        },
      });

      if (!testRun) {
        throw new ApiError("Test run not found", StatusCodes.NOT_FOUND);
      }

      logger.info(`Test run ${id} retrieved by user ${userId}`);

      res.json({
        success: true,
        data: { ...testRun },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to retrieve test run ${id}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to retrieve test run", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserTestRuns(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;

    try {
      const { page, limit, status, sortBy, sortOrder } = paginationSchema.parse(req.query);
      const { search } = req.query;

      const skip = (page - 1) * limit;

      // Build where clause with optional search
      const where: {
        userId: string;
        status?: TestStatus;
        testConfig?: {
          OR: Array<
            | { name?: { contains: string; mode: "insensitive" } }
            | { url?: { contains: string; mode: "insensitive" } }
          >;
        };
      } = { userId };

      if (status) {
        where.status = status;
      }

      if (search && typeof search === "string" && search.trim()) {
        where.testConfig = {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { url: { contains: search, mode: "insensitive" } },
          ],
        };
      }

      const [testRuns, total] = await Promise.all([
        prisma.testRun.findMany({
          where,
          select: {
            id: true,
            status: true,
            createdAt: true,
            testConfig: {
              select: {
                duration: true,
              },
            },
            healthCheckSummary: {
              select: {
                totalChecks: true,
                passedChecks: true,
                failedChecks: true,
                overallStatus: true,
              },
            },
            user: {
              select: {
                name: true,
                email: true,
                image: true,
                role: true,
              },
            },
          },
          orderBy: { [sortBy]: sortOrder },
          skip,
          take: limit,
        }),
        prisma.testRun.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      logger.info(`Retrieved ${testRuns.length} test runs for user ${userId} (page ${page})`);

      res.json({
        success: true,
        data: {
          testRuns,
          pagination: {
            page,
            limit,
            total,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
          },
          filters: {
            status: status || null,
            search: search || null,
            sortBy,
            sortOrder,
          },
        },
      });
    } catch (error) {
      logger.error(
        `Failed to retrieve test runs for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to retrieve test runs", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async cancelTest(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const userRole = req.user!.role;
    const { id } = req.params;

    if (!id || !isValidUUID(id.trim())) {
      throw new ApiError("Invalid test run ID format", StatusCodes.BAD_REQUEST);
    }

    try {
      const testRun = await prisma.testRun.findFirst({
        where: {
          id,
          OR: [{ userId }, ...(userRole === "admin" ? [{}] : [])],
        },
        select: {
          id: true,
          status: true,
          userId: true,
          testConfig: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!testRun) {
        throw new ApiError("Test run not found", StatusCodes.NOT_FOUND);
      }

      if (!["Queued", "Running"].includes(testRun.status)) {
        throw new ApiError(
          `Test cannot be cancelled in current state: ${testRun.status}`,
          StatusCodes.BAD_REQUEST,
        );
      }

      // Update test status in transaction
      await prisma.$transaction(async tx => {
        await tx.testRun.update({
          where: { id },
          data: {
            status: "Canceled",
            endedAt: new Date(),
          },
        });
      });

      // WIP: Try to cancel job in queue (if still queued)
      // try {
      //   const _queueService = getQueueService();
      // Note: Queue service would need jobId tracking for specific cancellation
      // For now, we mark as cancelled in database and let the worker handle it
      //   logger.info(`Job cancellation requested for test ${testId}`);
      // } catch (queueError) {
      //   logger.warn(
      //     `Failed to cancel queue job for test ${testId}: ${queueError instanceof Error ? queueError.message : "Unknown error"}`,
      //   );
      // }

      // Emit cancellation event
      try {
        const socketService = getSocketService();
        socketService.emitTestStatusUpdate(id, "Canceled");
        socketService.emitToUser(testRun.userId, "test:cancelled", {
          testRunId: id,
          testName: testRun.testConfig?.name,
          cancelledBy: userId,
          cancelledAt: new Date().toISOString(),
        });
      } catch (socketError) {
        logger.warn(`Failed to emit cancellation event: ${socketError}`);
      }

      logger.info(`Test ${id} (${testRun.testConfig?.name}) cancelled by user ${userId}`);

      res.json({
        success: true,
        message: "Test cancelled successfully",
        data: {
          testRunId: id,
          cancelledAt: new Date().toISOString(),
          previousStatus: testRun.status,
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to cancel test ${id} for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to cancel test", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteTest(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const userRole = req.user!.role;
    const { id: testRunId } = req.params;

    if (!testRunId || !isValidUUID(testRunId.trim())) {
      throw new ApiError("Invalid test run ID format", StatusCodes.BAD_REQUEST);
    }

    try {
      const testRun = await prisma.testRun.findFirst({
        where: {
          id: testRunId,
          OR: [{ userId }, ...(userRole === "admin" ? [{}] : [])],
        },
        select: {
          id: true,
          status: true,
          userId: true,
          testConfig: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!testRun) {
        throw new ApiError("Test run not found", StatusCodes.NOT_FOUND);
      }

      if (["Running", "Queued"].includes(testRun.status)) {
        throw new ApiError(
          `Cannot delete test that is currently ${testRun.status.toLowerCase()}. Please cancel the test first.`,
          StatusCodes.BAD_REQUEST,
        );
      }

      // Delete test and all related data in transaction
      await prisma.$transaction(async tx => {
        // Delete related data first due to foreign key constraints
        await tx.errorInfo.deleteMany({
          where: {
            testRunId,
          },
        });

        await tx.healthCheckSummary.deleteMany({
          where: {
            testRunId,
          },
        });

        await tx.testResult.deleteMany({
          where: { testRunId },
        });

        // Delete the test run itself
        await tx.testRun.delete({
          where: { id: testRunId },
        });
      });

      logger.info(`Test ${testRunId} (${testRun.testConfig?.name}) deleted by user ${userId}`);

      res.json({
        success: true,
        message: "Test deleted successfully",
        data: {
          testRunId,
          deletedAt: new Date().toISOString(),
          testName: testRun.testConfig?.name,
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to delete test ${testRunId} for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to delete test", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async getTestMetrics(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const userRole = req.user!.role;
    const { id: testRunId } = req.params;

    if (!testRunId || !isValidUUID(testRunId.trim())) {
      throw new ApiError("Invalid test run ID format", StatusCodes.BAD_REQUEST);
    }

    try {
      // Verify access
      const testRun = await prisma.testRun.findFirst({
        where: {
          id: testRunId,
          OR: [{ userId }, ...(userRole === "admin" ? [{}] : [])],
        },
        select: {
          id: true,
          status: true,
        },
      });

      if (!testRun) {
        throw new ApiError("Test run not found", StatusCodes.NOT_FOUND);
      }

      const metrics = await prisma.testMetric.findMany({
        where: { testRunId },
        orderBy: { timetamp: "asc" },
      });

      res.json({
        success: true,
        data: {
          testRunId,
          status: testRun.status,
          metrics,
          totalDataPoints: metrics.length,
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to get test metrics for ${testRunId} for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to get test metrics", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // FEAT: Use for error analysis and debugging
  public async getTestErrors(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const userRole = req.user!.role;
    const { id } = req.params;
    const { page = 1, limit = 50, errorType } = req.query;

    if (!id || !isValidUUID(id.trim())) {
      throw new ApiError("Invalid test run ID format", StatusCodes.BAD_REQUEST);
    }

    try {
      const testId = id;
      const skip = (Number(page) - 1) * Number(limit);

      // Verify access
      const testRun = await prisma.testRun.findFirst({
        where: {
          id: testId,
          OR: [{ userId }, ...(userRole === "admin" ? [{}] : [])],
        },
        select: {
          id: true,
          status: true,
          testConfig: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!testRun) {
        throw new ApiError("Test run not found", StatusCodes.NOT_FOUND);
      }

      const whereClause: { testRunId: string; errorType?: string } = { testRunId: testId };
      if (errorType && typeof errorType === "string") {
        whereClause.errorType = errorType;
      }

      const [errors, totalCount] = await Promise.all([
        prisma.errorInfo.findMany({
          where: whereClause,
          orderBy: { timestamp: "desc" },
          take: Number(limit),
          skip,
        }),
        prisma.errorInfo.count({
          where: whereClause,
        }),
      ]);

      // Group errors by type for summary
      const errorSummary = await prisma.errorInfo.groupBy({
        by: ["errorType"],
        where: { testRunId: testId },
        _sum: {
          count: true,
        },
        _count: {
          id: true,
        },
        orderBy: {
          _sum: {
            count: "desc",
          },
        },
      });

      res.json({
        success: true,
        data: {
          testId,
          testName: testRun.testConfig?.name,
          errors,
          summary: {
            totalErrors: totalCount,
            totalOccurrences: errorSummary.reduce((sum, err) => sum + (err._sum.count || 0), 0),
            errorTypes: errorSummary.map(err => ({
              type: err.errorType,
              uniqueErrors: err._count.id,
              totalOccurrences: err._sum.count || 0,
            })),
          },
          pagination: {
            page: Number(page),
            limit: Number(limit),
            total: totalCount,
            totalPages: Math.ceil(totalCount / Number(limit)),
          },
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to get test errors for ${id} for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to get test errors", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // Admin-only endpoints
  public async getAllTestRuns(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { page, limit, status, sortBy, sortOrder } = paginationSchema.parse(req.query);
      const { search, userId, dateFrom, dateTo } = req.query;
      const skip = (page - 1) * limit;

      // Build where clause with simpler approach
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const where: Record<string, any> = {};

      if (status && typeof status === "string") {
        where.status = status;
      }

      if (userId && typeof userId === "string" && isValidUUID(userId.trim())) {
        where.userId = userId;
      }

      if (search && typeof search === "string") {
        where.OR = [
          {
            testConfig: {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            user: {
              OR: [
                {
                  name: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
                {
                  email: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              ],
            },
          },
        ];
      }

      if (dateFrom || dateTo) {
        const dateFilter: Record<string, Date> = {};
        if (dateFrom && typeof dateFrom === "string") {
          dateFilter.gte = new Date(dateFrom);
        }
        if (dateTo && typeof dateTo === "string") {
          dateFilter.lte = new Date(dateTo);
        }
        where.createdAt = dateFilter;
      }

      const [testRuns, total] = await Promise.all([
        prisma.testRun.findMany({
          where,
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
            testConfig: true,
            testResult: {
              select: {
                successRate: true,
                errorRate: true,
                avgResponseTime: true,
                successfulRequests: true,
                failedRequests: true,
              },
            },
            _count: {
              select: {
                testMetrics: true,
                errorInfos: true,
              },
            },
          },
          orderBy: { [sortBy]: sortOrder },
          skip,
          take: limit,
        }),
        prisma.testRun.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      res.json({
        success: true,
        data: {
          testRuns,
          pagination: {
            page,
            limit,
            total,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
          },
          filters: {
            status,
            userId,
            search,
            dateFrom,
            dateTo,
          },
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to get all test runs: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to get test runs", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async getSystemStats(req: AuthRequest, res: Response): Promise<void> {
    const [totalTests, totalUsers, runningTests, queuedTests, todayTests] =
      await prisma.$transaction(async tx => {
        return [
          await tx.testRun.count(),
          await tx.user.count(),
          await tx.testRun.count({ where: { status: "Running" } }),
          await tx.testRun.count({ where: { status: "Queued" } }),
          await tx.testRun.count({
            where: {
              createdAt: {
                gte: new Date(new Date().setHours(0, 0, 0, 0)),
              },
            },
          }),
        ];
      });

    // Get queue stats
    const queueService = getQueueService();
    const queueStats = await queueService.getQueueStats();

    // Get socket stats
    const socketService = getSocketService();
    const connectedUsers = socketService.getConnectedUsers().length;
    const totalSockets = socketService.getTotalConnectedSockets();

    res.json({
      success: true,
      data: {
        system: {
          totalTests,
          totalUsers,
          runningTests,
          queuedTests,
          todayTests,
          connectedUsers,
          totalSockets,
        },
        queue: queueStats,
      },
    });
  }
}
