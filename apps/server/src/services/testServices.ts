import axios from "axios";
import prisma from "../config/db";
import { getIO } from "../lib/socket";
import { TestConfig, TestResult } from "../types";
import pLimit from "p-limit";
import { retry } from "../utils/retry";

export const executeLoadTest = async (
  testRunId: string,
  config: TestConfig
): Promise<TestResult> => {
  const io = getIO();
  const { url, method, totalRequests } = config;
  const concurrency = config.concurrency || 5;

  io.emit(`test:${testRunId}:start`, { message: "Test started" });

  const startTime = Date.now();
  let completed = 0;
  let failed = 0;
  const responseTimes: number[] = [];

  const limitConcurrency = pLimit(concurrency);

  await Promise.all(
    Array.from({ length: totalRequests }, () =>
      limitConcurrency(async () => {
        const requestStart = performance.now();
        try {
          await axios({
            url,
            method: method.toLowerCase() as any,
            timeout: 10000,
          });

          responseTimes.push(performance.now() - requestStart);
        } catch (err) {
          failed++;
          io.emit(`test:${testRunId}:error`, { error: (err as any).message });
        } finally {
          completed++;
          io.emit(`test:${testRunId}:progress`, {
            completed,
            total: totalRequests,
          });
        }
      })
    )
  );

  const duration = (Date.now() - startTime) / 1000;
  const avgResponseTime =
    responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length || 0;
  const maxResponseTime = Math.max(...responseTimes, 0);
  const errorRate = (failed / totalRequests) * 100;

  // Emit event: test complete
  const result = {
    testRunId,
    totalRequests,
    completed,
    failed,
    duration,
    avgResponseTime,
    maxResponseTime,
    errorRate,
  };
  io.emit(`test:${testRunId}:complete`, result);

  // Fetch metadata from testRun for saving history
  const testRun = await prisma.testRun.findUnique({
    where: { id: testRunId },
    select: {
      id: true,
      testName: true,
      url: true,
      method: true,
      userId: true,
    },
  });

  await retry(() =>
    prisma.testRun.update({
      where: { id: testRunId },
      data: {
        status: "completed",
        duration,
        avgResponseTime,
        maxResponseTime,
        errorRate,
        updatedAt: new Date(),
      },
    })
  );

  if (testRun) {
    try {
      await retry(() =>
        prisma.testHistory.create({
          data: {
            testRunId: testRun.id,
            testName: testRun.testName,
            url: testRun.url,
            method: testRun.method,
            requestCount: totalRequests,
            duration,
            avgResponseTime,
            maxResponseTime,
            errorRate,
            userId: testRun.userId,
          },
        })
      );
    } catch (error) {
      console.error("❌ Failed to save test history:", error);
    }
  } else {
    console.warn(`⚠️ No testRun found for ID: ${testRunId}`);
  }

  return result;
};
