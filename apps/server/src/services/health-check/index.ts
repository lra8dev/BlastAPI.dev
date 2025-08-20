import { HealthCheckStatus, prisma } from "@blastapi/db";
import { DEFAULT_HEALTH_CHECKS } from "@/constants";
import { healthCheckLogger } from "@/lib/logger";
import { retry } from "@/lib/retry";
import {
  HealthCheckResult,
  HealthCheckSummary,
  HealthCheckThreshold,
  PerformanceMetrics,
} from "@/types";
import { errorMessage } from "@/utils/error-message";

export class HealthCheckService {
  /**
   * Execute health checks for a test run with optimized database operations
   */
  static async executeHealthChecks(
    testRunId: string,
    metrics: PerformanceMetrics,
  ): Promise<HealthCheckSummary> {
    const results: HealthCheckResult[] = [];

    for (const check of DEFAULT_HEALTH_CHECKS) {
      const result = await this.evaluateCheck(check, metrics);
      results.push(result);
    }

    const summaryData = this.calculateSummaryData(results);

    try {
      const summary = await retry(
        async () => {
          return await prisma.$transaction(async tx => {
            const createdSummary = await tx.healthCheckSummary.create({
              data: {
                testRunId,
                totalChecks: summaryData.totalChecks,
                passedChecks: summaryData.passedChecks,
                failedChecks: summaryData.failedChecks,
                overallStatus: summaryData.overallStatus,
                passPercentage: summaryData.passPercentage,
              },
              select: { id: true, testRunId: true },
            });

            const healthCheckResultsData = results.map(result => ({
              ...result,
              healthCheckSummaryId: createdSummary.id,
              failureDetails: result.failureDetails ?? undefined,
            }));

            await tx.healthCheckResult.createMany({
              data: healthCheckResultsData,
            });

            return {
              testRunId,
              totalChecks: summaryData.totalChecks,
              passedChecks: summaryData.passedChecks,
              failedChecks: summaryData.failedChecks,
              overallStatus: summaryData.overallStatus,
              passPercentage: summaryData.passPercentage,
              checks: results,
            };
          });
        },
        3,
        1000,
      );

      // Log detailed results for debugging
      if (summary.failedChecks > 0) {
        healthCheckLogger.warn(
          {
            testRunId,
            failedChecks: summary.failedChecks,
            totalChecks: summary.totalChecks,
            passPercentage: summary.passPercentage,
          },
          "Health checks failed",
        );

        results
          .filter(r => !r.passed)
          .forEach(r => {
            healthCheckLogger.warn(
              {
                testRunId,
                checkName: r.checkName,
                metric: r.metric,
                expected: `${r.operator} ${r.threshold}${r.unit}`,
                actual: `${r.actualValue}${r.unit}`,
                failureDetails: r.failureDetails,
              },
              `Health check failed: ${r.checkName}`,
            );
          });
      }

      return summary;
    } catch (error) {
      healthCheckLogger.error(
        {
          testRunId,
          totalChecks: summaryData.totalChecks,
          error: errorMessage(error),
          failedChecks: summaryData.failedChecks,
        },
        "Failed to create health check records",
      );
      throw new Error(`Health check creation failed: ${errorMessage(error)}`);
    }
  }

  /**
   * Evaluate a single health check
   */
  private static async evaluateCheck(
    check: HealthCheckThreshold,
    metrics: PerformanceMetrics,
  ): Promise<HealthCheckResult> {
    const actualValue = this.getMetricValue(check.metric, metrics);
    const passed = this.evaluateCondition(actualValue, check.operator, check.value);

    let failureDetails = null;
    if (!passed) {
      failureDetails = {
        failedRequests: metrics.failedRequests,
        totalRequests: metrics.totalRequests,
        failurePercentage: Math.round(((actualValue - check.value) / check.value) * 100),
        additionalInfo: `Expected ${check.metric} ${check.operator} ${check.value}${check.unit}, but got ${Math.round(actualValue * 100) / 100}${check.unit}`,
      };
    }

    return {
      checkId: check.id,
      checkName: check.name,
      metric: check.metric,
      threshold: check.value,
      actualValue: Math.round(actualValue * 100) / 100,
      operator: check.operator,
      unit: check.unit,
      passed,
      failureDetails,
      createdAt: new Date(),
    };
  }

  /**
   * Get the actual metric value based on the metric type
   */
  private static getMetricValue(metric: string, metrics: PerformanceMetrics): number {
    switch (metric) {
      case "p99":
        return metrics.p99;
      case "p95":
        return metrics.p95;
      case "p50":
        return metrics.p50;
      case "avg":
        return metrics.avg;
      case "min":
        return metrics.min;
      case "max":
        return metrics.max;
      case "successRate":
        return metrics.successRate;
      case "errorRate":
        return metrics.errorRate;
      default:
        healthCheckLogger.warn(`Unknown metric type: ${metric}, defaulting to 0`);
        return 0;
    }
  }

  /**
   * Evaluate the condition based on operator
   */
  private static evaluateCondition(actual: number, operator: string, threshold: number): boolean {
    switch (operator) {
      case "<":
        return actual < threshold;
      case ">":
        return actual > threshold;
      case "<=":
        return actual <= threshold;
      case ">=":
        return actual >= threshold;
      case "=":
      case "==":
        return Math.abs(actual - threshold) < 0.01;
      case "!=":
        return Math.abs(actual - threshold) >= 0.01;
      default:
        healthCheckLogger.warn(`Unknown operator: ${operator}, defaulting to false`);
        return false;
    }
  }

  /**
   * Calculate health check summary data
   */
  private static calculateSummaryData(results: HealthCheckResult[]): {
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
    overallStatus: HealthCheckStatus;
    passPercentage: number;
  } {
    const passedChecks = results.filter(r => r.passed).length;
    const failedChecks = results.length - passedChecks;
    const passPercentage = Math.round((passedChecks / results.length) * 100);

    let overallStatus: HealthCheckStatus;

    if (failedChecks === 0) {
      overallStatus = "PASS";
    } else if (passedChecks === 0) {
      overallStatus = "FAIL";
    } else {
      overallStatus = "PARTIAL";
    }

    return {
      totalChecks: results.length,
      passedChecks,
      failedChecks,
      overallStatus,
      passPercentage,
    };
  }

  /**
   * Get failed health checks only
   */
  static async getFailedHealthChecks(healthCheckSummaryId: string): Promise<HealthCheckResult[]> {
    try {
      healthCheckLogger.debug({ healthCheckSummaryId }, "Fetching failed health checks");

      const results = await prisma.healthCheckResult.findMany({
        where: {
          healthCheckSummaryId,
          passed: false,
        },
        orderBy: { createdAt: "asc" },
      });

      healthCheckLogger.info(
        {
          healthCheckSummaryId,
          failedChecksCount: results.length,
        },
        "Successfully fetched failed health checks",
      );

      return results;
    } catch (error) {
      healthCheckLogger.error(
        {
          healthCheckSummaryId,
          error: errorMessage(error),
        },
        "Failed to fetch failed health checks",
      );
      return [];
    }
  }
}
