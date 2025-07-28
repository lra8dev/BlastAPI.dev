import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST!,
  port: parseInt(process.env.REDIS_PORT!, 10),
  password: process.env.REDIS_PASSWORD!,
  maxRetriesPerRequest: null,
});

// FIXME: Env variables are not loading here...
console.log("redis SERER PORT", process.env.SERVER_PORT);
console.log("src/config loading Redis Host:", process.env.REDIS_HOST!);
console.log("src/config loading Redis Port:", process.env.REDIS_PORT!);
console.log("src/config loading Redis Password:", process.env.REDIS_PASSWORD!);

redis.on("connect", () => {
  console.log("Connected to Redis Cloud! ✅");
});

redis.on("error", err => {
  console.error("❌ Redis error:", err);
});

redis.on("ready", () => {
  console.log("Redis client is ready! ✨");
});
