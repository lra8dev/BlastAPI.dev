import Redis from "ioredis";
import { redisLogger } from "@/lib/logger";

export const createRedisConnection = () =>
  new Redis({
    host: process.env.REDIS_HOST!,
    port: Number(process.env.REDIS_PORT!) || 6379,
    password: process.env.REDIS_PASSWORD!,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    connectTimeout: 30000,
    commandTimeout: 30000,
    lazyConnect: false,
    keepAlive: 30000,
    family: 4,
    db: 0,
    reconnectOnError: err => {
      const targetError = "READONLY";
      return err.message.includes(targetError);
    },
  });

const redis = createRedisConnection();

redis.on("connect", () => {
  redisLogger.info("Connecting to Redis...");
});

redis.on("ready", () => {
  redisLogger.info("Connected to Redis and ready!");
});

redis.on("error", err => {
  redisLogger.error({ err: err.message }, "Redis connection error");
  // Don't exit process, let Redis handle reconnection
});

redis.on("close", () => {
  redisLogger.info("Redis connection closed");
});

redis.on("reconnecting", (ms: number) => {
  redisLogger.info({ reconnectDelay: ms }, "Reconnecting to Redis");
});

redis.on("end", () => {
  redisLogger.info("Redis connection ended");
});

const initializeRedis = async () => {
  try {
    await redis.ping();
    redisLogger.info("Redis ping successful");
  } catch (err) {
    redisLogger.error({ err }, "Redis initialization failed");
    throw err;
  }
};

initializeRedis().catch(err => redisLogger.error({ err }, "Redis initialization error"));

export { initializeRedis };
