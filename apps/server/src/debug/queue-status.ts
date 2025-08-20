import { createRedisConnection, testQueue } from "@/config/bullmq";
import { queueLogger } from "@/lib/logger";

const redis = createRedisConnection();

export const debugQueueStatus = async () => {
  try {
    queueLogger.info("Debugging Queue Status...");

    // Check Redis connection
    const ping = await redis.ping();
    queueLogger.info({ ping }, "Redis ping result");

    // Get queue counts
    const waiting = await testQueue.getWaiting();
    const active = await testQueue.getActive();
    const completed = await testQueue.getCompleted();
    const failed = await testQueue.getFailed();
    const delayed = await testQueue.getDelayed();

    const queueStats = {
      waiting: waiting.length,
      active: active.length,
      completed: completed.length,
      failed: failed.length,
      delayed: delayed.length,
    };

    queueLogger.info({ stats: queueStats }, "Queue Statistics");

    // Show waiting jobs details
    if (waiting.length > 0) {
      queueLogger.info("Waiting jobs details:");
      waiting.forEach((job, index) => {
        queueLogger.info(
          {
            jobNumber: index + 1,
            jobId: job.id,
            jobName: job.name,
            jobData: job.data,
          },
          "Waiting job",
        );
      });
    }

    // Show active jobs details
    if (active.length > 0) {
      queueLogger.info("Active jobs details:");
      active.forEach((job, index) => {
        queueLogger.info({ jobNumber: index + 1, jobId: job.id, jobName: job.name }, "Active job");
      });
    }

    // Show failed jobs
    if (failed.length > 0) {
      queueLogger.info("Failed jobs details:");
      failed.forEach((job, index) => {
        queueLogger.error(
          {
            jobNumber: index + 1,
            jobId: job.id,
            failedReason: job.failedReason,
          },
          "Failed job",
        );
      });
    }

    // Check if workers are registered
    const workers = await redis.smembers(`bull:${testQueue.name}:workers`);
    queueLogger.info({ workerCount: workers.length }, "Registered workers");
    workers.forEach((worker, index) => {
      queueLogger.info({ workerNumber: index + 1, worker }, "Worker details");
    });

    // Get queue health
    const health = await testQueue.getJobCounts();
    queueLogger.info({ health }, "Queue health");
  } catch (error) {
    queueLogger.error({ err: error }, "Error debugging queue");
  }
};
