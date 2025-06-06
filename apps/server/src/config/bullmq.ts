import { Queue } from "bullmq";
import { redis } from "./redis";

// Initialize BullMQ queue with Redis client
export const loadTestQueue = new Queue("loadTestQueue", {
  connection: redis,
});
