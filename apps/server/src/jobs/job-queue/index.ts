import { Worker, QueueEvents, Job } from "bullmq";
import { redis } from "@/config/redis";
import { executeLoadTest } from "@/services/execute-load-test";

const TEST_QUEUE_NAME = "loadTestQueue";

// WIP: This worker processes load test jobs from the queue.
export const testWorker = new Worker(
  TEST_QUEUE_NAME,
  async (job: Job) => {
    console.log(`👷‍♂️ Processing Job ID: ${job.id}`);
    const { testRunId, testConfig } = job.data;

    try {
      const result = await executeLoadTest(testRunId, testConfig);
      return result;
    } catch (error) {
      console.error(`❌ Error processing job ${job.id}:`, error);
      throw error;
    }
  },
  {
    connection: redis,
  }
);

// Queue events for logging
const queueEvents = new QueueEvents(TEST_QUEUE_NAME, { connection: redis });
queueEvents.on("completed", ({ jobId }) => {
  console.log(`✅ Job ${jobId} completed.`);
});
queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(`🔥 Job ${jobId} failed: ${failedReason}`);
});
