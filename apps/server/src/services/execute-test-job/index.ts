import { prisma } from "@blastapi/db";
import { NewTestConfig } from "@blastapi/validators";
import axios, { AxiosResponse } from "axios";
import pLimit from "p-limit";
import { getIO } from "@/lib/socket";
import { RequestMetrics } from "@/types";
import { calPerformanceStats } from "@/utils/performance-stats";
import { retry } from "@/utils/retry";

export const executeTestJob = async (config: NewTestConfig) => {
  const io = getIO();
  const { url, method, totalRequests, concurrency, headers, body } = config;

  // Initialize tracking variables
  const startTime = Date.now();
  let completed = 0;
  let failed = 0;
  const requestMetrics: RequestMetrics[] = [];
  const statusCodes: Map<number, number> = new Map();

  try {
    // Update TestRun status to Running
    const { id: testRunId } = await retry(() =>
      prisma.testRun.update({
        where: { id: config.id },
        data: {
          status: "Running",
          startedAt: new Date(),
        },
        select: { id: true },
      }),
    );

    // Save initial test configurations
    await retry(() =>
      prisma.testConfig.create({
        data: {
          testRunId,
          url,
          method,
          name: config.name,
          region: config.region,
          duration: config.duration || 20,
          requestRate: config.requestRate,
          requestCount: totalRequests || 50,
          concurrencyLevel: concurrency,
          headers: headers ?? undefined,
          body: body ?? undefined,
        },
        select: {},
      }),
    );

    // Emit test started event
    io.emit(`test:${testRunId}:started`, {
      testRunId,
      message: "Load test started",
      config: {
        url,
        method,
        totalRequests,
        concurrency,
        expectedDuration: Math.ceil(totalRequests / concurrency),
      },
    });

    // Create concurrency limiter
    const limitConcurrency = pLimit(concurrency);

    // Execute requests with proper error handling and metrics collection
    await Promise.allSettled(
      Array.from({ length: totalRequests }, (_, index) =>
        limitConcurrency(async () => {
          const requestStart = performance.now();
          let requestMetric: RequestMetrics;

          try {
            const response: AxiosResponse = await axios({
              url,
              method: method.toLowerCase(),
              headers: headers ? JSON.parse(headers) : undefined, // WIP: make headers as JSON object
              data: body ? JSON.parse(body) : undefined, // WIP: make body as JSON object
              timeout: 15000, // Increased timeout
              validateStatus: () => true,
            });

            const latency = performance.now() - requestStart;
            const success = response.status >= 200 && response.status < 400;

            requestMetric = {
              latency,
              statusCode: response.status,
              success,
              timestamp: Date.now(),
            };

            // Track status codes
            statusCodes.set(response.status, (statusCodes.get(response.status) || 0) + 1);

            if (success) {
              // Only count successful requests for response times
              requestMetrics.push(requestMetric);
            } else {
              failed++;
              requestMetric.errorMessage = `HTTP ${response.status}`;
            }
          } catch (error: any) {
            const latency = performance.now() - requestStart;
            failed++;

            requestMetric = {
              latency,
              statusCode: 0,
              success: false,
              timestamp: Date.now(),
              errorMessage: error.code || error.message || "Unknown error",
            };

            // Emit specific error for monitoring
            io.emit(`test:${testRunId}:error`, {
              requestIndex: index,
              error: error.message,
              latency,
              timestamp: Date.now(),
            });
          } finally {
            completed++;

            // Calculate real-time performance metrics
            const currentStats = calPerformanceStats(requestMetrics);
            const currentThroughput = completed / ((Date.now() - startTime) / 1000);

            // Save individual request metric to database
            await retry(
              () =>
                prisma.testMetric.create({
                  data: {
                    testRunId,
                    latency: requestMetric.latency,
                    statusCode: requestMetric.statusCode,
                    throughput: currentThroughput,
                    timestamp: new Date(requestMetric.timestamp),
                    usersCreated: completed,
                    p95: currentStats.p95,
                    p99: currentStats.p99,
                    avgRequest: currentStats.avg,
                    maxRequest: currentStats.max,
                  },
                  select: {},
                }),
              2,
              100,
            );

            // Emit progress with detailed metrics every 10 requests or at completion
            if (completed % 10 === 0 || completed === totalRequests) {
              const progressData = {
                completed,
                total: totalRequests,
                failed,
                successRate: ((completed - failed) / completed) * 100,
                currentThroughput: Math.round(currentThroughput * 100) / 100,
                avgLatency: Math.round(currentStats.avg * 100) / 100,
                p95Latency: Math.round(currentStats.p95 * 100) / 100,
                statusCodeDistribution: Object.fromEntries(statusCodes),
                elapsedTime: Math.round((Date.now() - startTime) / 1000),
              };

              io.emit(`test:${testRunId}:progress`, progressData);
            }
          }
        }),
      ),
    );

    // Calculate final comprehensive metrics
    const duration = (Date.now() - startTime) / 1000;
    const successfulRequests = completed - failed;
    const finalStats = calPerformanceStats(requestMetrics);

    // Handle case where all requests failed
    if (successfulRequests === 0) {
      await retry(() =>
        prisma.testRun.update({
          where: { id: testRunId },
          data: {
            status: "Failed",
            updatedAt: new Date(),
          },
          select: {},
        }),
      );

      const failureResult = {
        testRunId,
        successRate: 0,
        errorRate: 100,
        avgResponseTime: 0,
        maxResponseTime: 0,
        avgLatency: 0,
        avgThroughput: 0,
        totalRequests,
        duration,
        statusCodeDistribution: Object.fromEntries(statusCodes),
        message: "All requests failed",
      };

      io.emit(`test:${testRunId}:failed`, failureResult);
      return testRunId;
    }

    // Prepare comprehensive test results
    const result = {
      testRunId,
      successRate: (successfulRequests / totalRequests) * 100,
      errorRate: (failed / totalRequests) * 100,
      avgResponseTime: finalStats.avg,
      maxResponseTime: finalStats.max,
      minResponseTime: finalStats.min,
      p50ResponseTime: finalStats.p50,
      p95ResponseTime: finalStats.p95,
      p99ResponseTime: finalStats.p99,
      avgLatency: finalStats.avg,
      avgThroughput: completed / duration,
      peakThroughput: Math.max(
        ...requestMetrics.map(
          (_, i) => (i + 1) / ((requestMetrics[i]?.timestamp ?? 0 - startTime) / 1000) || 0,
        ),
      ),
      totalRequests,
      successfulRequests,
      failedRequests: failed,
      duration,
      // statusCodeDistribution: Object.fromEntries(statusCodes), // WIP: Add code distribution
      concurrencyLevel: concurrency,
    };

    // Emit comprehensive completion event
    io.emit(`test:${testRunId}:complete`, {
      ...result,
      message: "Load test completed successfully",
      summary: {
        performance:
          finalStats.avg < 100
            ? "Excellent"
            : finalStats.avg < 500
              ? "Good"
              : finalStats.avg < 1000
                ? "Average"
                : "Poor",
        reliability:
          result.successRate > 99
            ? "Excellent"
            : result.successRate > 95
              ? "Good"
              : result.successRate > 90
                ? "Average"
                : "Poor",
      },
    });

    // Save consolidated test result
    await retry(() =>
      prisma.testResult.create({
        data: {
          ...result,
        },
        select: {},
      }),
    );

    // Update test run status to completed
    await retry(() =>
      prisma.testRun.update({
        where: { id: testRunId },
        data: {
          status: "Completed",
          endedAt: new Date(),
          updatedAt: new Date(),
        },
        select: {},
      }),
    );

    return testRunId;
  } catch (error: any) {
    console.error(`❌ Critical error in test execution:`, error);

    // Update status to failed on critical errors
    await retry(() =>
      prisma.testRun.update({
        where: { id: config.id },
        data: {
          status: "Failed",
          updatedAt: new Date(),
        },
        select: {},
      }),
    );

    // Emit critical failure event
    io.emit(`test:${config.id}:critical-error`, {
      error: error.message,
      completed,
      failed,
      timestamp: Date.now(),
    });

    throw error;
  }
};
