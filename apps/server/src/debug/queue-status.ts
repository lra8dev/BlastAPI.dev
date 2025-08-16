import { createRedisConnection, testQueue } from "@/config/bullmq";

const redis = createRedisConnection();

export const debugQueueStatus = async () => {
  try {
    console.log("🔍 Debugging Queue Status...");

    // Check Redis connection
    const ping = await redis.ping();
    console.log("Redis ping:", ping);

    // Get queue counts
    const waiting = await testQueue.getWaiting();
    const active = await testQueue.getActive();
    const completed = await testQueue.getCompleted();
    const failed = await testQueue.getFailed();
    const delayed = await testQueue.getDelayed();

    console.log("📊 Queue Statistics:");
    console.log(`- Waiting jobs: ${waiting.length}`);
    console.log(`- Active jobs: ${active.length}`);
    console.log(`- Completed jobs: ${completed.length}`);
    console.log(`- Failed jobs: ${failed.length}`);
    console.log(`- Delayed jobs: ${delayed.length}`);

    // Show waiting jobs details
    if (waiting.length > 0) {
      console.log("⏳ Waiting jobs:");
      waiting.forEach((job, index) => {
        console.log(
          `  ${index + 1}. Job ${job.id} - ${job.name} (Data: ${JSON.stringify(job.data)})`,
        );
      });
    }

    // Show active jobs details
    if (active.length > 0) {
      console.log("🔄 Active jobs:");
      active.forEach((job, index) => {
        console.log(`  ${index + 1}. Job ${job.id} - ${job.name}`);
      });
    }

    // Show failed jobs
    if (failed.length > 0) {
      console.log("❌ Failed jobs:");
      failed.forEach((job, index) => {
        console.log(`  ${index + 1}. Job ${job.id} - ${job.failedReason}`);
      });
    }

    // Check if workers are registered
    const workers = await redis.smembers(`bull:${testQueue.name}:workers`);
    console.log(`👷 Registered workers: ${workers.length}`);
    workers.forEach((worker, index) => {
      console.log(`  ${index + 1}. ${worker}`);
    });

    // Get queue health
    const health = await testQueue.getJobCounts();
    console.log("🏥 Queue health:", health);
  } catch (error) {
    console.error("❌ Error debugging queue:", error);
  }
};
