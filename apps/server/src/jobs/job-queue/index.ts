import { NewTestConfig } from "@blastapi/validators";
import { Job, QueueEvents, Worker } from "bullmq";
import { createRedisConnection, TEST_QUEUE_NAME } from "@/config/bullmq";
import { jobLogger, queueLogger, workerLogger } from "@/lib/logger";
import { executeTestJob } from "@/services/execute-test-job";

const workerRedis = createRedisConnection();
const queueEventsRedis = createRedisConnection();

workerRedis.on("connect", () => workerLogger.info("Worker Redis connected"));
workerRedis.on("ready", () => workerLogger.info("Worker Redis ready"));
workerRedis.on("error", err => workerLogger.error({ err: err.message }, "Worker Redis error"));

queueEventsRedis.on("connect", () => queueLogger.info("QueueEvents Redis connected"));
queueEventsRedis.on("ready", () => queueLogger.info("QueueEvents Redis ready"));
queueEventsRedis.on("error", err =>
  queueLogger.error({ err: err.message }, "QueueEvents Redis error"),
);

const processJob = async (job: Job<NewTestConfig, string>) => {
  const startTime = Date.now();

  jobLogger.info({ jobId: job.id, testName: job.data.name || "Unnamed Test" }, "Processing job");

  try {
    await job.updateProgress(0);

    const testRunId = await executeTestJob(job.data);

    if (!testRunId) throw new Error("Failed to execute test job");

    const duration = Date.now() - startTime;
    jobLogger.info({ jobId: job.id, duration, testRunId }, "Job completed successfully");

    await job.updateProgress(100);
    return testRunId;
  } catch (error: unknown) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    jobLogger.error(
      {
        jobId: job.id,
        duration,
        error: errorMessage,
        jobData: {
          url: job.data.url,
          method: job.data.method,
          totalRequests: job.data.totalRequests,
          concurrency: job.data.concurrency,
        },
      },
      "Job failed",
    );

    throw error;
  }
};

export const testWorker = new Worker(TEST_QUEUE_NAME, processJob, {
  connection: workerRedis,
  concurrency: 3,
  stalledInterval: 30000,
  maxStalledCount: 1,
  removeOnComplete: { count: 5 },
  removeOnFail: { count: 10 },
});

testWorker.on("ready", () => {
  workerLogger.info("Worker is ready and waiting for jobs");
});

testWorker.on("error", error => {
  workerLogger.error({ err: error.message }, "Worker error");
});

testWorker.on("active", job => {
  workerLogger.debug({ jobId: job.id }, "Job is now active");
});

testWorker.on("completed", (job, result) => {
  workerLogger.info({ jobId: job.id, result }, "Worker job completed");
});

testWorker.on("failed", (job, err) => {
  workerLogger.error({ jobId: job?.id, err: err.message }, "Worker job failed");
});

testWorker.on("stalled", jobId => {
  workerLogger.warn({ jobId }, "Worker job has stalled");
});

testWorker.on("drained", () => {
  workerLogger.info("Worker: All jobs have been processed");
});

const queueEvents = new QueueEvents(TEST_QUEUE_NAME, {
  connection: queueEventsRedis,
  autorun: true,
});

queueEvents.on("completed", ({ jobId, returnvalue }) => {
  queueLogger.info({ jobId, result: returnvalue }, "QueueEvents: Job completed successfully");
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  queueLogger.error({ jobId, reason: failedReason }, "QueueEvents: Job failed");
});

queueEvents.on("waiting", ({ jobId }) => {
  queueLogger.debug({ jobId }, "QueueEvents: Job is waiting in queue");
});

queueEvents.on("active", ({ jobId, prev }) => {
  queueLogger.debug({ jobId, previousState: prev }, "QueueEvents: Job is now active");
});

queueEvents.on("stalled", ({ jobId }) => {
  queueLogger.warn({ jobId }, "QueueEvents: Job has stalled");
});

queueEvents.on("progress", ({ jobId, data }) => {
  queueLogger.debug({ jobId, progress: data }, "QueueEvents: Job progress");
});

queueEvents.on("added", ({ jobId }) => {
  queueLogger.debug({ jobId }, "QueueEvents: Job has been added to queue");
});

queueEvents.on("error", error => {
  queueLogger.error({ err: error.message }, "QueueEvents error");
});

// Graceful shutdown handling
const gracefulShutdown = async () => {
  workerLogger.info("Shutting down gracefully...");
  try {
    await testWorker.close();
    workerLogger.info("Worker closed");
    await queueEvents.close();
    queueLogger.info("QueueEvents closed");
    await workerRedis.disconnect();
    workerLogger.info("Worker Redis disconnected");
    await queueEventsRedis.disconnect();
    queueLogger.info("QueueEvents Redis disconnected");
  } catch (error) {
    workerLogger.error({ err: error }, "Error during shutdown");
  }
  process.exit(0);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

process.on("uncaughtException", error => {
  workerLogger.fatal({ err: error }, "Uncaught Exception");
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  workerLogger.fatal({ reason, promise }, "Unhandled Rejection");
  process.exit(1);
});

export { queueEvents };
