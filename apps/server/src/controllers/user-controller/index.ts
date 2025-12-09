import { prisma, UserRole } from "@blastapi/db";
import { hashPassword, validatePassword } from "@blastapi/utils";
import {
  changePasswordSchema,
  deleteAccountSchema,
  updateProfileSchema,
} from "@blastapi/validators";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validate as isValidUUID } from "uuid";
import { logger } from "@/lib/logger";
import { ApiError, AuthRequest } from "@/middleware";

export class UserController {
  public async getUserStats(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;

    try {
      const [totalTests, successfulTests, failedTests, runningTests, queuedTests, thisMonthTests] =
        await prisma.$transaction(async tx => {
          const now = new Date();
          const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

          return [
            await tx.testRun.count({ where: { userId } }),
            await tx.testRun.count({ where: { userId, status: "Succeeded" } }),
            await tx.testRun.count({ where: { userId, status: "Failed" } }),
            await tx.testRun.count({ where: { userId, status: "Running" } }),
            await tx.testRun.count({ where: { userId, status: "Queued" } }),
            await tx.testRun.count({
              where: {
                userId,
                createdAt: { gte: monthStart },
              },
            }),
          ];
        });

      // Get recent test activity (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const recentTests = await prisma.testRun.findMany({
        where: {
          userId,
          createdAt: { gte: thirtyDaysAgo },
        },
        select: {
          status: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      });

      // Group by day for activity chart
      const dailyActivity: Record<string, number> = {};
      recentTests.forEach(test => {
        const date = test.createdAt.toISOString().split("T")[0];
        if (date) {
          dailyActivity[date] = (dailyActivity[date] || 0) + 1;
        }
      });

      // Get average test metrics
      const avgMetrics = await prisma.testResult.aggregate({
        where: {
          testRun: { userId },
        },
        _avg: {
          avgThroughput: true,
          avgResponseTime: true,
          successRate: true,
          p95ResponseTime: true,
        },
      });

      const overallSuccessRate =
        totalTests > 0 ? Math.round((successfulTests / totalTests) * 100 * 100) / 100 : 0;

      logger.info(`User stats retrieved for user: ${userId}`);

      res.json({
        success: true,
        data: {
          stats: {
            totalTests,
            successfulTests,
            failedTests,
            runningTests,
            queuedTests,
            thisMonthTests,
            successRate: overallSuccessRate,
          },
          averageMetrics: {
            throughput: Math.round((avgMetrics._avg.avgThroughput || 0) * 100) / 100,
            responseTime: Math.round((avgMetrics._avg.avgResponseTime || 0) * 100) / 100,
            successRate: Math.round((avgMetrics._avg.successRate || 0) * 100) / 100,
            p95ResponseTime: Math.round((avgMetrics._avg.p95ResponseTime || 0) * 100) / 100,
          },
          dailyActivity,
          lastUpdated: new Date().toISOString(),
        },
      });
    } catch (error) {
      logger.error(
        `Failed to retrieve user stats for ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to retrieve user statistics", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateProfile(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const { name, email } = updateProfileSchema.parse(req.body);

    // Build update data object, filtering out null values
    const updateData: { name?: string; email?: string } = {};
    if (name !== null) updateData.name = name;
    if (email !== null) updateData.email = email;

    // Only check for email conflicts if email is being updated
    if (email && email !== null) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          id: { not: userId },
        },
        select: { id: true, email: true },
      });

      if (existingUser) {
        throw new ApiError("Email already in use", StatusCodes.CONFLICT);
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    logger.info(`User profile updated: ${userId} - Fields: ${Object.keys(updateData).join(", ")}`);

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: { user: updatedUser },
    });
  }

  public async changePassword(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const { currentPassword, newPassword } = changePasswordSchema.parse(req.body);

    if (currentPassword === newPassword) {
      throw new ApiError(
        "New password must be different from current password",
        StatusCodes.BAD_REQUEST,
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, password: true, email: true },
    });

    if (!user || !user.password) {
      throw new ApiError("User not found or password not set", StatusCodes.NOT_FOUND);
    }

    // Verify current password
    const isCurrentPasswordValid = await validatePassword(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      logger.warn(`Failed password change attempt for user ${userId} - Invalid current password`);
      throw new ApiError("Current password is incorrect", StatusCodes.UNAUTHORIZED);
    }

    try {
      const hashedNewPassword = await hashPassword(newPassword, 12);

      await prisma.$transaction(async tx => {
        await tx.user.update({
          where: { id: userId },
          data: {
            password: hashedNewPassword,
            updatedAt: new Date(),
          },
        });
      });

      logger.info(`Password changed successfully for user: ${userId}`);

      res.json({
        success: true,
        message: "Password changed successfully",
        data: {
          changedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      logger.error(
        `Failed to change password for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to update password", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteAccount(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const { password } = deleteAccountSchema.parse(req.body);

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          password: true,
          email: true,
          role: true,
          _count: {
            select: {
              testRuns: true,
            },
          },
        },
      });

      if (!user || !user.password) {
        throw new ApiError("User not found or password not set", StatusCodes.NOT_FOUND);
      }

      // Prevent admin from deleting their account if they're the only admin
      if (user.role === "admin") {
        const adminCount = await prisma.user.count({
          where: { role: "admin" },
        });

        if (adminCount <= 1) {
          throw new ApiError(
            "Cannot delete account - you are the only admin. Please assign another admin first.",
            StatusCodes.BAD_REQUEST,
          );
        }
      }

      const isPasswordValid = await validatePassword(password, user.password);
      if (!isPasswordValid) {
        logger.warn(`Failed account deletion attempt for user ${userId} - Invalid password`);
        throw new ApiError("Invalid password", StatusCodes.UNAUTHORIZED);
      }

      // Check for running tests
      const runningTests = await prisma.testRun.count({
        where: {
          userId,
          status: { in: ["Queued", "Running"] },
        },
      });

      if (runningTests > 0) {
        throw new ApiError(
          `Cannot delete account with ${runningTests} running or queued tests. Please wait for them to complete or cancel them first.`,
          StatusCodes.BAD_REQUEST,
        );
      }

      await prisma.$transaction(async tx => {
        await tx.user.delete({
          where: { id: userId },
        });
      });

      logger.info(
        `Account self-deleted: ${userId} (${user.email}) with ${user._count.testRuns} total tests`,
      );

      res.json({
        success: true,
        message: "Account deleted successfully",
        data: {
          deletedAt: new Date().toISOString(),
          totalTestsDeleted: user._count.testRuns,
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to delete account for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to delete account", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // Admin-only methods
  public async getAllUsers(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { page = 1, limit = 20, search, role } = req.query;

      // Validate and sanitize pagination parameters
      const pageNum = Math.max(1, parseInt(page as string) || 1);
      const limitNum = Math.min(100, Math.max(1, parseInt(limit as string) || 20)); // Cap at 100
      const skip = (pageNum - 1) * limitNum;

      // Build where clause for filtering
      const whereClause: {
        OR?: Array<
          | { name?: { contains: string; mode: "insensitive" } }
          | { email?: { contains: string; mode: "insensitive" } }
        >;
        role?: UserRole;
      } = {};

      if (search && typeof search === "string" && search.trim()) {
        whereClause.OR = [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ];
      }

      if (role && typeof role === "string" && (role === "user" || role === "admin")) {
        whereClause.role = role as UserRole;
      }

      const [users, total] = await prisma.$transaction(async tx => {
        return [
          await tx.user.findMany({
            where: whereClause,
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              createdAt: true,
              updatedAt: true,
              _count: {
                select: {
                  testRuns: true,
                },
              },
            },
            orderBy: { createdAt: "desc" },
            skip,
            take: limitNum,
          }),
          await tx.user.count({ where: whereClause }),
        ];
      });

      const totalPages = Math.ceil(total / limitNum);

      logger.info(`Admin ${req.user!.id} retrieved user list - Page: ${pageNum}, Total: ${total}`);

      res.json({
        success: true,
        data: {
          users,
          pagination: {
            page: pageNum,
            limit: limitNum,
            total,
            totalPages,
            hasNext: pageNum < totalPages,
            hasPrev: pageNum > 1,
          },
          filters: {
            search: search || null,
            role: role || null,
          },
        },
      });
    } catch (error) {
      logger.error(
        `Failed to retrieve users list for admin ${req.user!.id}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to retrieve users", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserById(req: AuthRequest, res: Response): Promise<void> {
    const { userId } = req.params;

    if (!userId || !isValidUUID(userId.trim())) {
      throw new ApiError("Invalid user ID", StatusCodes.BAD_REQUEST);
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
          testRuns: {
            select: {
              id: true,
              status: true,
              createdAt: true,
              startedAt: true,
              endedAt: true,
              testConfig: {
                select: {
                  name: true,
                  url: true,
                  method: true,
                  vusers: true,
                  duration: true,
                },
              },
              testResult: {
                select: {
                  successRate: true,
                  avgResponseTime: true,
                  p95ResponseTime: true,
                },
              },
            },
            orderBy: { createdAt: "desc" },
            take: 10,
          },
          _count: {
            select: {
              testRuns: true,
            },
          },
        },
      });

      if (!user) {
        throw new ApiError("User not found", StatusCodes.NOT_FOUND);
      }

      // Calculate additional user statistics
      const testStats = {
        total: user._count.testRuns,
        recent: user.testRuns.length,
        avgSuccessRate:
          user.testRuns.length > 0
            ? Math.round(
                (user.testRuns.reduce((sum, test) => sum + (test.testResult?.successRate || 0), 0) /
                  user.testRuns.filter(test => test.testResult).length) *
                  100,
              ) / 100
            : 0,
      };

      logger.info(`Admin ${req.user!.id} retrieved user details for ${userId}`);

      res.json({
        success: true,
        data: {
          user: {
            ...user,
            testStats,
          },
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to retrieve user ${userId} for admin ${req.user!.id}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to retrieve user details", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteUser(req: AuthRequest, res: Response): Promise<void> {
    const { userId } = req.params;

    if (!userId || !isValidUUID(userId.trim())) {
      throw new ApiError("Invalid user ID", StatusCodes.BAD_REQUEST);
    }

    // Prevent admin from deleting themselves
    if (userId === req.user!.id) {
      throw new ApiError("Cannot delete your own account", StatusCodes.BAD_REQUEST);
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          role: true,
          _count: {
            select: {
              testRuns: true,
            },
          },
        },
      });

      if (!user) {
        throw new ApiError("User not found", StatusCodes.NOT_FOUND);
      }

      // Prevent deletion of other admin accounts
      if (user.role === "admin") {
        throw new ApiError("Cannot delete admin accounts", StatusCodes.FORBIDDEN);
      }

      const runningTests = await prisma.testRun.count({
        where: {
          userId,
          status: { in: ["Queued", "Running"] },
        },
      });

      if (runningTests > 0) {
        throw new ApiError(
          `Cannot delete user with ${runningTests} running or queued tests`,
          StatusCodes.BAD_REQUEST,
        );
      }

      await prisma.$transaction(async tx => {
        await tx.user.delete({
          where: { id: userId },
        });
      });

      logger.info(
        `User ${userId} (${user.email}) with ${user._count.testRuns} tests deleted by admin ${req.user!.id}`,
      );

      res.json({
        success: true,
        message: "User deleted successfully",
        data: {
          deletedUserId: userId,
          deletedUserEmail: user.email,
          testsCount: user._count.testRuns,
          deletedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      logger.error(
        `Failed to delete user ${userId} by admin ${req.user!.id}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to delete user", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // Utility method
  public async getUserActivity(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user!.id;
    const { days = 7 } = req.query;

    try {
      const daysBack = Math.min(30, Math.max(1, parseInt(days as string) || 7)); // Limit to 30 days
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - daysBack);

      const activity = await prisma.testRun.findMany({
        where: {
          userId,
          createdAt: { gte: startDate },
        },
        select: {
          id: true,
          status: true,
          createdAt: true,
          startedAt: true,
          endedAt: true,
          testConfig: {
            select: {
              name: true,
              url: true,
              method: true,
            },
          },
          testResult: {
            select: {
              successRate: true,
              avgResponseTime: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      // Group by date for timeline
      const timeline: Record<string, typeof activity> = {};
      activity.forEach(test => {
        const date = test.createdAt.toISOString().split("T")[0];
        if (date) {
          if (!timeline[date]) timeline[date] = [];
          timeline[date].push(test);
        }
      });

      res.json({
        success: true,
        data: {
          activity,
          timeline,
          summary: {
            totalTests: activity.length,
            period: `${daysBack} days`,
            startDate: startDate.toISOString(),
            endDate: new Date().toISOString(),
          },
        },
      });
    } catch (error) {
      logger.error(
        `Failed to retrieve activity for user ${userId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      throw new ApiError("Failed to retrieve user activity", StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}
