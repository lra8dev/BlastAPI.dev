import { redis } from "@/config/redis";

const RESULT_CACHE_PREFIX = "test_result:";

export const cacheTestResult = async (testRunId: string, result: any) => {
  await redis.set(`${RESULT_CACHE_PREFIX}${testRunId}`, JSON.stringify(result), "EX", 60 * 60); // 1 hour expiry
};

export const getCachedTestResult = async (testRunId: string) => {
  const data = await redis.get(`${RESULT_CACHE_PREFIX}${testRunId}`);
  return data ? JSON.parse(data) : null;
};

export const invalidateTestResultCache = async (testRunId: string) => {
  await redis.del(`${RESULT_CACHE_PREFIX}${testRunId}`);
};
