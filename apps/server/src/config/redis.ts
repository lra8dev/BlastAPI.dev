import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST!,
  port: parseInt(process.env.REDIS_PORT!, 10),
  password: process.env.REDIS_PASSWORD!,
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log("Connected to Redis Cloud! ✅");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err);
});

redis.on("ready", () => {
  console.log("Redis client is ready! ✨");
});
