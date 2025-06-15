import { TestConfig, TestResult } from "@api-overload/types";
import axios from "axios";
import pLimit from "p-limit";

import prisma from "@/config/db";
import { getIO } from "@/lib/socket";
import { retry } from "@/utils/retry";

import { saveTestResult } from "../save-test-result";

export const executeLoadTest = async (
  testRunId: string,
  config: TestConfig,
): Promise<TestResult> => {
  const io = getIO();
  const { url, method, totalRequests } = config;
  const concurrency = config.concurrency || 5;

  await prisma.testConfig.create({
    data: {
      testRunId,
      testDuration: config.duration || 10, // seconds
      requestRate: config.requestRate || 10, // requests/sec
      concurrencyLevel: config.concurrency || 5,
      headers: config.headers || {},
      body: config.body || {},
    },
  });

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
        let statusCode = 0;

        try {
          const response = await axios({
            url,
            method: method.toLowerCase() as any,
            timeout: 10000,
          });
          const latency = performance.now() - requestStart;
          statusCode = response.status;

          responseTimes.push(latency);

          retry(() =>
            prisma.metric.create({
              data: {
                testRunId,
                latency,
                statusCode,
                throughput: 1 / (latency / 1000), // throughput in req/sec
                timestamp: new Date(),
              },
            }),
          );
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
      }),
    ),
  );

  const duration = (Date.now() - startTime) / 1000;
  const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length || 0;
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

  await saveTestResult({
    testRunId,
    avgLatency: avgResponseTime,
    avgThroughput: completed / duration, // req/sec
    totalRequests,
    successRate: ((completed - failed) / totalRequests) * 100,
    errorRate,
  });

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
    }),
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
        }),
      );
    } catch (error) {
      console.error("❌ Failed to save test history:", error);
    }
  } else {
    console.warn(`⚠️ No testRun found for ID: ${testRunId}`);
  }

  return result;
};
