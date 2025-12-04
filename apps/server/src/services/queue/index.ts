import { prisma, TestStatus } from "@blastapi/db";
import Queue from "bull";
import Redis from "ioredis";
import { logger } from "@/lib/logger";
import { LoadTestResult, TestJobData } from "@/types";
import { LoadTestEngine } from "../load-test-engine";
import { getSocketService } from "../socket";

export class QueueService {
  private redis: Redis;
  private testQueue: Queue.Queue<TestJobData>;
  private loadTestEngine: LoadTestEngine;

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST!,
      port: parseInt(process.env.REDIS_PORT!),
      password: process.env.REDIS_PASSWORD!,
      maxRetriesPerRequest: null,
    });
    this.loadTestEngine = new LoadTestEngine();

    this.testQueue = new Queue<TestJobData>("load-tests", {
      redis: {
        host: process.env.REDIS_HOST!,
        port: parseInt(process.env.REDIS_PORT!),
        password: process.env.REDIS_PASSWORD!,
        maxRetriesPerRequest: null,
      },
      defaultJobOptions: {
        removeOnComplete: 100,
        removeOnFail: 50,
        attempts: 1,
        backoff: {
          type: "exponential",
          delay: 2000,
        },
      },
    });

    this.setupQueueProcessors();
    this.setupQueueEventHandlers();
  }

  private setupQueueProcessors(): void {
    // Process test jobs with concurrency limit
    this.testQueue.process("run-test", 5, async job => {
      const { testRunId, userId, config } = job.data;

      logger.info(`Starting load test '${testRunId}' for user ${userId}`);

      try {
        await prisma.testRun.update({
          where: { id: testRunId },
          data: {
            status: TestStatus.Running,
            startedAt: new Date(),
          },
          select: { id: true },
        });

        // Emit socket event for test started
        try {
          const socketService = getSocketService();
          socketService.emitTestStatusUpdate({
            testRunId,
            status: TestStatus.Running,
            startedAt: new Date().toLocaleString(),
          });
        } catch {
          logger.warn(`Could not emit socket event for test '${testRunId}' start`);
        }

        // Run the load test
        const result = await this.loadTestEngine.runTest(testRunId, config);

        await this.saveTestResults(testRunId, result);

        await prisma.testRun.update({
          where: { id: testRunId },
          data: {
            status: TestStatus.Succeeded,
            endedAt: new Date(),
          },
          select: { id: true },
        });

        // Emit socket event for test completed successfully
        try {
          const socketService = getSocketService();
          socketService.emitTestStatusUpdate({
            testRunId,
            status: TestStatus.Succeeded,
            endedAt: new Date().toLocaleString(),
          });
        } catch {
          logger.warn(`Could not emit socket event for test '${testRunId}' completion`);
        }

        logger.info(`Load test '${testRunId}' completed successfully`);
        return result;
      } catch (error) {
        logger.error(`Load test '${testRunId}' failed`);

        await prisma.testRun.update({
          where: { id: testRunId },
          data: {
            status: TestStatus.Failed,
            endedAt: new Date(),
          },
          select: { id: true },
        });

        // Emit socket event for test failed
        try {
          const socketService = getSocketService();
          socketService.emitTestStatusUpdate({
            testRunId,
            status: TestStatus.Failed,
            endedAt: new Date().toLocaleString(),
            error: error instanceof Error ? error.message : "Unknown error",
          });
        } catch {
          logger.warn(`Could not emit socket event for test '${testRunId}' failure`);
        }

        await prisma.errorInfo.create({
          data: {
            testRunId,
            errorType: "TEST_EXECUTION_ERROR",
            message: error instanceof Error ? error.message : "Unknown error",
            details: {
              stack: error instanceof Error ? error.stack : undefined,
              timestamp: new Date().toLocaleString(),
            },
          },
          select: { id: true },
        });

        throw error;
      }
    });
  }

  public async addTestJob(data: TestJobData): Promise<Queue.Job<TestJobData>> {
    const job = await this.testQueue.add("run-test", data, {
      priority: 1,
      delay: 0,
    });

    logger.info(`Added test job ${job.id} for test run ${data.testRunId}`);
    return job;
  }

  public async getJobStatus(jobId: string): Promise<Queue.Job<TestJobData> | null> {
    return this.testQueue.getJob(jobId);
  }

  public async cancelJob(jobId: string): Promise<void> {
    const job = await this.getJobStatus(jobId);
    if (job) {
      await job.remove();
      logger.info(`Cancelled job ${jobId}`);
    }
  }

  private setupQueueEventHandlers(): void {
    this.testQueue.on("completed", job => {
      logger.info(`Job ${job.id} completed successfully`);
    });

    this.testQueue.on("failed", (job, error) => {
      logger.error({ error: error.message }, `Job ${job.id} failed`);
    });

    this.testQueue.on("stalled", job => {
      logger.warn(`Job ${job.id} stalled`);
    });

    this.testQueue.on("error", error => {
      logger.error({ error: error.message }, "Queue error:");
    });
  }

  private async saveTestResults(testRunId: string, result: LoadTestResult): Promise<void> {
    await prisma.testResult.create({
      data: {
        testRunId,
        avgThroughput: result.summary.avgThroughput,
        maxThroughput: result.summary.maxThroughput,
        vusersCreated: result.summary.vusersCreated,
        minResponseTime: result.summary.minResponseTime,
        avgResponseTime: result.summary.avgResponseTime,
        p50ResponseTime: result.summary.p50ResponseTime,
        p95ResponseTime: result.summary.p95ResponseTime,
        p99ResponseTime: result.summary.p99ResponseTime,
        maxResponseTime: result.summary.maxResponseTime,
        successRate: result.summary.successRate,
        errorRate: result.summary.errorRate,
        successfulRequests: result.summary.successfulRequests,
        failedRequests: result.summary.failedRequests,
        statusCodes: result.summary.statusCodes,
        logs: result.logs || [],
      },
    });

    if (result.metrics && result.metrics.length > 0) {
      await prisma.testMetric.createMany({
        data: result.metrics.map(metric => ({
          testRunId,
          timetamp: new Date(metric.timestamp),
          throughput: metric.throughput,
          statusCode: metric.statusCode,
          vusersCreated: metric.vusersCreated,
          vusersActive: metric.vusersActive,
          p95ResponseTime: metric.p95ResponseTime,
          p99ResponseTime: metric.p99ResponseTime,
        })),
      });
    }

    if (result.healthChecks) {
      const healthCheckSummary = await prisma.healthCheckSummary.create({
        data: {
          testRunId,
          totalChecks: result.healthChecks.totalChecks,
          passedChecks: result.healthChecks.passedChecks,
          failedChecks: result.healthChecks.failedChecks,
          passPercentage: result.healthChecks.passPercentage,
          overallStatus: result.healthChecks.overallStatus,
        },
      });

      if (result.healthChecks.results.length > 0) {
        await prisma.healthCheckResult.createMany({
          data: result.healthChecks.results.map(check => ({
            healthCheckSummaryId: healthCheckSummary.id,
            checkName: check.checkName,
            threshold: check.threshold,
            actualValue: check.actualValue,
            passed: check.passed,
            failureDetails: check.failureDetails || {},
          })),
        });
      }
    }
  }

  public async getQueueStats(): Promise<{
    waiting: number;
    active: number;
    completed: number;
    failed: number;
  }> {
    const waiting = await this.testQueue.getWaiting();
    const active = await this.testQueue.getActive();
    const completed = await this.testQueue.getCompleted();
    const failed = await this.testQueue.getFailed();

    return {
      waiting: waiting.length,
      active: active.length,
      completed: completed.length,
      failed: failed.length,
    };
  }

  public async cleanup(): Promise<void> {
    await this.testQueue.close();
    await this.redis.quit();
  }
}

let queueService: QueueService;

export const initializeQueues = async (): Promise<void> => {
  queueService = new QueueService();
  logger.info("Queue service initialized");
};

export const getQueueService = (): QueueService => {
  if (!queueService) {
    throw new Error("Queue service not initialized");
  }
  return queueService;
};
