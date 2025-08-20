import { Queue } from "bullmq";
import { queueLogger } from "@/lib/logger";
import { createRedisConnection } from "./redis";

export const TEST_QUEUE_NAME = "apiTest";

const queueRedis = createRedisConnection();
queueRedis.on("connect", () => queueLogger.info("Queue Redis connected"));
queueRedis.on("error", err => queueLogger.error({ err: err.message }, "Queue Redis error"));

export const testQueue = new Queue(TEST_QUEUE_NAME, {
  connection: queueRedis,
  defaultJobOptions: {
    removeOnComplete: 5,
    removeOnFail: 10,
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 2000,
    },
  },
});

export { createRedisConnection };
