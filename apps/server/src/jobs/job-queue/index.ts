import { NewTestConfig } from "@blastapi/validators";
import { Job, QueueEvents, Worker } from "bullmq";
import { TEST_QUEUE_NAME } from "@/config/bullmq";
import { redis } from "@/config/redis";
import { executeTestJob } from "@/services/execute-test-job";

const processJob = async (job: Job<NewTestConfig, string>) => {
  const startTime = Date.now();

  console.log(`👷‍♂️ Processing Job ID: ${job.id} - ${job.data.name || "Unnamed Test"}`);

  await job.updateProgress(0);

  try {
    const testRunId = await executeTestJob(job.data);

    const duration = Date.now() - startTime;

    console.log(`✅ Job ${job.id} completed successfully in ${duration}ms`);

    await job.updateProgress(100);

    return testRunId;
  } catch (error: any) {
    const duration = Date.now() - startTime;

    console.error(`❌ Job ${job.id} failed after ${duration}ms:`, error.message);

    console.error(`Job Data:`, {
      url: job.data.url,
      method: job.data.method,
      totalRequests: job.data.totalRequests,
      concurrency: job.data.concurrency,
    });

    throw error;
  }
};

export const testWorker = new Worker(TEST_QUEUE_NAME, processJob, {
  connection: redis,
  concurrency: 3,
  stalledInterval: 30000,
  maxStalledCount: 1,
});

const queueEvents = new QueueEvents(TEST_QUEUE_NAME, { connection: redis });

queueEvents.on("completed", ({ jobId, returnvalue }) => {
  console.log(`✅ Job ${jobId} completed successfully. Result: ${returnvalue}`);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.error(`❌ Job ${jobId} failed: ${failedReason}`);
});

queueEvents.on("waiting", ({ jobId }) => {
  console.log(`⏳ Job ${jobId} is waiting in queue`);
});

queueEvents.on("active", ({ jobId, prev }) => {
  console.log(`🔄 Job ${jobId} is now active (was: ${prev})`);
});

queueEvents.on("stalled", ({ jobId }) => {
  console.warn(`⚠️ Job ${jobId} has stalled`);
});

queueEvents.on("progress", ({ jobId, data }) => {
  console.log(`📈 Job ${jobId} progress: ${data}%`);
});

// Graceful shutdown handling
process.on("SIGTERM", async () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully...");
  await testWorker.close();
  await queueEvents.close();
  process.exit(0);
});
