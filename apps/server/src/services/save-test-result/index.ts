import prisma from "@/config/db";
import { cacheTestResult } from "@/lib/cache.redis";
import { CreateTestResult } from "@/types";

export const saveTestResult = async ({
  testRunId,
  avgLatency,
  avgThroughput,
  totalRequests,
  successRate,
  errorRate,
}: CreateTestResult) => {
  try {
    const result = await prisma.testResult.create({
      data: {
        testRunId,
        avgLatency,
        avgThroughput,
        totalRequests,
        successRate,
        errorRate,
      },
    });

    await cacheTestResult(testRunId, result);

    return result;
  } catch (error) {
    console.error("❌ Failed to create test result:", error);
    throw new Error("Failed to create test result.");
  }
};
