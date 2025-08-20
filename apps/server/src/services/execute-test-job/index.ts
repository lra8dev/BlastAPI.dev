import { prisma } from "@blastapi/db";
import { NewTestConfig } from "@blastapi/validators";
import axios, { AxiosResponse } from "axios";
import pLimit from "p-limit";
import { jobLogger } from "@/lib/logger";
import { retry } from "@/lib/retry";
import { getIO } from "@/lib/socket";
import { RequestMetrics } from "@/types";
import { errorMessage } from "@/utils/error-message";
import { calPerformanceStats } from "@/utils/performance-stats";
import { HealthCheckService } from "../health-check";

export const executeTestJob = async (config: NewTestConfig) => {
  const io = getIO();
  const { url, method, totalRequests, concurrency, headers, body } = config;

  const startTime = Date.now();
  let completed = 0;
  let failed = 0;
  const requestMetrics: RequestMetrics[] = [];
  const statusCodes: Map<number, number> = new Map();

  try {
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

    const existingConfig = await prisma.testConfig.findUnique({
      where: { testRunId },
    });

    if (!existingConfig) {
      await retry(() =>
        prisma.testConfig.create({
          data: {
            testRunId,
            url,
            method,
            name: config.name,
            region: config.region,
            duration: config.duration,
            requestRate: config.requestRate,
            requestCount: totalRequests,
            concurrencyLevel: concurrency,
            headers: headers ?? undefined,
            body: body ?? undefined,
          },
          select: { id: true },
        }),
      );
    }

    io.emit(`test:${testRunId}:started`, {
      testRunId,
      message: "Test started for execution",
      startedAt: Date.now(),
    });

    const limitConcurrency = pLimit(concurrency);

    await Promise.allSettled(
      Array.from({ length: totalRequests }, (_, index) =>
        limitConcurrency(async () => {
          const requestStart = performance.now();
          let requestMetric: RequestMetrics;

          try {
            const response: AxiosResponse = await axios({
              url,
              method: method.toLowerCase(),
              headers: headers ? JSON.parse(headers) : undefined,
              data: body ? JSON.parse(body) : undefined,
              timeout: 15000,
              validateStatus: () => true,
              maxRedirects: 5,
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
              requestMetrics.push(requestMetric);
            } else {
              failed++;
              requestMetric.errorMessage = `HTTP ${response.status}`;
              requestMetrics.push(requestMetric);
            }
          } catch (error) {
            const latency = performance.now() - requestStart;
            failed++;

            requestMetric = {
              latency,
              statusCode: 0,
              success: false,
              timestamp: Date.now(),
              errorMessage: errorMessage(error) || "Unknown error",
            };

            // Add failed requests to metrics
            requestMetrics.push(requestMetric);

            if (index % 10 === 0) {
              io.emit(`test:${testRunId}:error`, {
                requestIndex: index,
                error: errorMessage(error),
                latency,
                timestamp: Date.now(),
              });
            }
          } finally {
            completed++;

            // Calculate real-time performance metrics from successful requests only
            const successfulMetrics = requestMetrics.filter(m => m.success);
            const currentStats = calPerformanceStats(successfulMetrics);
            const currentThroughput = completed / (Date.now() - startTime);

            // Save individual request metric to database
            if (completed % 5 === 0 || completed === totalRequests) {
              try {
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
                      select: { id: true },
                    }),
                  2,
                  100,
                );
              } catch (dbError) {
                jobLogger.warn(
                  { err: dbError, requestIndex: index },
                  "Could not save metric for request",
                );
              }
            }

            // Emit progress with detailed metrics every 10 requests or at completion
            if (completed % 10 === 0 || completed === totalRequests) {
              const progressData = {
                completed,
                total: totalRequests,
                failed,
                successRate: completed > 0 ? ((completed - failed) / completed) * 100 : 0,
                currentThroughput: Math.round(currentThroughput * 100) / 100,
                minLatency: Math.round(currentStats.min * 100) / 100,
                avgLatency: Math.round(currentStats.avg * 100) / 100,
                p95Latency: Math.round(currentStats.p95 * 100) / 100,
                statusCodes: Object.fromEntries(statusCodes),
                elapsedTime: Math.round(Date.now() - startTime),
              };

              io.emit(`test:${testRunId}:progress`, progressData);
            }
          }
        }),
      ),
    );

    // Calculate final comprehensive metrics
    const duration = Date.now() - startTime;
    const successfulRequests = completed - failed;

    const successfulMetrics = requestMetrics.filter(m => m.success);
    const finalStats = calPerformanceStats(successfulMetrics);

    // Handle case where all requests failed
    if (successfulRequests === 0) {
      await retry(() =>
        prisma.testRun.update({
          where: { id: testRunId },
          data: {
            status: "Failed",
            updatedAt: new Date(),
          },
          select: { id: true },
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

    const requestRate = totalRequests / duration;

    const metricsForHealthCheck = {
      p50: finalStats.p50,
      p95: finalStats.p95,
      p99: finalStats.p99,
      avg: finalStats.avg,
      min: finalStats.min,
      max: finalStats.max,
      successRate: (successfulRequests / totalRequests) * 100,
      errorRate: (failed / totalRequests) * 100,
      totalRequests,
      failedRequests: failed,
    };

    let healthCheckSummary = null;

    try {
      healthCheckSummary = await HealthCheckService.executeHealthChecks(
        testRunId,
        metricsForHealthCheck,
      );
    } catch (healthCheckError) {
      jobLogger.warn({ err: healthCheckError }, "Health check failed");
    }

    const result = {
      testRunId,
      successRate: (successfulRequests / totalRequests) * 100,
      errorRate: (failed / totalRequests) * 100,
      minResponseTime: Math.round(finalStats.min),
      avgResponseTime: Math.round(finalStats.avg),
      p50ResponseTime: Math.round(finalStats.p50),
      p95ResponseTime: Math.round(finalStats.p95),
      p99ResponseTime: Math.round(finalStats.p99),
      maxResponseTime: Math.round(finalStats.max),
      avgThroughput: Math.round(completed / duration),
      peakThroughput: Math.max(
        ...requestMetrics.map(
          (_, i) => (i + 1) / (requestMetrics[i]?.timestamp ?? startTime - startTime) || 0,
        ),
      ),
      requestRate: Math.round(requestRate),
      totalResponses: completed,
      totalRequests,
      successfulRequests,
      failedRequests: failed,
      duration: Math.round(duration),
      statusCodes: Object.fromEntries(statusCodes),
    };

    await retry(() =>
      prisma.testResult.create({
        data: {
          ...result,
        },
        select: { id: true },
      }),
    );

    let finalTestStatus: "Succeeded" | "Failed" = "Succeeded";

    if (healthCheckSummary && healthCheckSummary.overallStatus === "FAIL") {
      jobLogger.warn(
        {
          failedChecks: healthCheckSummary.failedChecks,
          totalChecks: healthCheckSummary.totalChecks,
        },
        "Test execution succeeded but failed health checks",
      );
    }

    await retry(() =>
      prisma.testRun.update({
        where: { id: testRunId },
        data: {
          status: finalTestStatus,
          endedAt: new Date(),
          updatedAt: new Date(),
        },
        select: { id: true },
      }),
    );

    io.emit(`test:${testRunId}:complete`, { testRunId, message: "Test completed successfully" });

    return testRunId;
  } catch (error) {
    await retry(() =>
      prisma.testRun.update({
        where: { id: config.id },
        data: {
          status: "Failed",
          updatedAt: new Date(),
        },
        select: { id: true },
      }),
    );

    io.emit(`test:${config.id}:critical-error`, {
      error: errorMessage(error),
      completed,
      failed,
      timestamp: Date.now(),
    });

    throw error;
  }
};
