import prisma from "@/config/db";
import { redis } from "@/config/redis";

export const deleteTest = async (testRunId: string) => {
  try {
    await redis.del(`test:result:${testRunId}`);

    // Delete related records (order matters due to foreign keys)
    await prisma.metric.deleteMany({ where: { testRunId } });
    await prisma.testConfig.delete({ where: { testRunId } });
    await prisma.testHistory.deleteMany({ where: { testRunId } });
    await prisma.testResult.delete({ where: { testRunId } });
    await prisma.testRun.delete({ where: { id: testRunId } });

    return { success: true, message: "Test run and associated data deleted." };
  } catch (error) {
    console.error("❌ Deletion failed:", error);
    throw new Error("Failed to delete test run.");
  }
};
