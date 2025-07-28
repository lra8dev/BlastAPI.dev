import { Queue } from "bullmq";
import { redis } from "./redis";

export const TEST_QUEUE_NAME = "apiTest";

// Initialize BullMQ queue with Redis client
export const testQueue = new Queue(TEST_QUEUE_NAME, {
  connection: redis,
});
