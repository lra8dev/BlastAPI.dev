import { HealthCheckStatus } from "@blastapi/db/types";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { performance } from "perf_hooks";
import { logger } from "@/lib/logger";
import {
  HealthCheck,
  HealthCheckResult,
  LoadTestConfig,
  LoadTestResult,
  TestMetrics,
  TestSummary,
  WindowTestMetric,
} from "@/types";

export class LoadTestEngine {
  private isRunning = false;
  private shouldStop = false;
  private activeVUsers = new Set<number>();
  private metrics: WindowTestMetric[] = [];
  private logs: string[] = [];
  private errorDetails: Map<string, { count: number; examples: string[] }> = new Map();

  public async runTest(testRunId: string, config: LoadTestConfig): Promise<LoadTestResult> {
    if (this.isRunning) {
      throw new Error("Load test already running");
    }

    this.isRunning = true;
    this.shouldStop = false;
    this.activeVUsers.clear();
    this.metrics = [];
    this.logs = [];
    this.errorDetails.clear();

    logger.info(`Starting load test ${testRunId}`);
    this.logs.push(`Test started at ${new Date().toISOString()}`);
    this.logs.push(`Target URL: ${config.url}`);
    this.logs.push(`Method: ${config.method}`);
    this.logs.push(`Virtual users: ${config.vusers}`);
    this.logs.push(`Duration: ${config.duration}s`);
    this.logs.push(`Ramp-up: ${config.rampUp}s in ${config.rampUpSteps} steps`);

    try {
      const startTime = Date.now();
      const testPromises: Promise<void>[] = [];

      // Calculate ramp-up schedule
      const rampUpInterval = (config.rampUp * 1000) / config.rampUpSteps;
      const usersPerStep = Math.ceil(config.vusers / config.rampUpSteps);

      // Start ramp-up process
      for (let step = 0; step < config.rampUpSteps; step++) {
        if (this.shouldStop) break;

        const startVUser = step * usersPerStep;
        const endVUser = Math.min(startVUser + usersPerStep, config.vusers);

        for (let vUserId = startVUser; vUserId < endVUser; vUserId++) {
          const promise = this.runVirtualUser(vUserId, config, startTime);
          testPromises.push(promise);
        }

        // Wait for ramp-up interval before starting next batch
        if (step < config.rampUpSteps - 1) {
          await this.sleep(rampUpInterval);
        }
      }

      // Wait for test duration
      await this.sleep(config.duration * 1000);

      // Stop the test
      this.shouldStop = true;

      // Wait for all virtual users to complete with timeout
      await Promise.allSettled(testPromises);

      // Generate results
      const result = await this.generateResults();

      this.logs.push(`Test completed at ${new Date().toISOString()}`);
      this.logs.push(`Total requests made: ${this.metrics.length}`);
      this.logs.push(`Success rate: ${result.summary.successRate.toFixed(2)}%`);
      this.logs.push(`Average response time: ${result.summary.avgResponseTime.toFixed(2)}ms`);
      this.logs.push(`P95 response time: ${result.summary.p95ResponseTime.toFixed(2)}ms`);

      if (result.healthChecks) {
        this.logs.push(
          `Health checks: ${result.healthChecks.passedChecks}/${result.healthChecks.totalChecks} passed (${result.healthChecks.overallStatus})`,
        );
      }

      // Log error summary if there are failures
      if (this.errorDetails.size > 0) {
        this.logs.push("Error Summary:");
        this.errorDetails.forEach((detail, errorType) => {
          this.logs.push(`  ${errorType}: ${detail.count} occurrences`);
          if (detail.examples.length > 0) {
            this.logs.push(`    Example: ${detail.examples[0]}`);
          }
        });
      }

      logger.info(`Load test ${testRunId} completed. Total requests: ${this.metrics.length}`);
      return result;
    } finally {
      this.isRunning = false;
      this.shouldStop = false;
      this.activeVUsers.clear();
    }
  }

  private async runVirtualUser(
    vUserId: number,
    config: LoadTestConfig,
    startTime: number,
  ): Promise<void> {
    this.activeVUsers.add(vUserId);

    try {
      while (!this.shouldStop && Date.now() - startTime < config.duration * 1000) {
        await this.makeRequest(vUserId, config);

        // Dynamic throttling based on virtual user count to prevent overwhelming
        const baseDelay = Math.max(100, 1000 / config.vusers);
        const jitter = Math.random() * baseDelay;
        await this.sleep(baseDelay + jitter);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      logger.error(`Virtual user ${vUserId} encountered error: ${errorMessage}`);
      this.logs.push(`VUser ${vUserId} error: ${errorMessage}`);
    } finally {
      this.activeVUsers.delete(vUserId);
    }
  }

  private async makeRequest(vUserId: number, config: LoadTestConfig): Promise<void> {
    const startTime = performance.now();

    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: config.url,
        timeout: 30000,
        headers: {
          ...this.getDefaultHeaders(),
          ...config.headers,
        },
        validateStatus: (status: number) => status < 600,
        maxRedirects: 5,
        timeoutErrorMessage: "Request timeout after 30 seconds",
      };

      if (config.method !== "GET" && config.body) {
        axiosConfig.data = config.body;

        if (!axiosConfig?.headers?.["Content-Type"]) {
          axiosConfig.headers = axiosConfig.headers || {};
          axiosConfig.headers["Content-Type"] = "application/json";
        }
      }

      const response: AxiosResponse = await axios(axiosConfig);
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      const isSuccess = this.isSuccessfulResponse(response.status);

      this.metrics.push({
        timestamp: Date.now(),
        responseTime,
        statusCode: response.status,
        success: isSuccess,
        vuserId: vUserId,
      });

      // Track error details for non-success responses
      if (!isSuccess) {
        const errorKey = `HTTP_${response.status}`;
        this.trackError(errorKey, `${response.status} ${response.statusText}`, response.data);
      }
    } catch (error) {
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      let statusCode = 0;
      let errorMessage = "Unknown error";
      let errorKey = "GENERAL_ERROR";

      if (error instanceof AxiosError) {
        statusCode = error.response?.status || 0;
        errorMessage = this.formatAxiosError(error);

        // More specific error categorization
        if (error.code === "ENOTFOUND") {
          errorKey = "DNS_RESOLUTION_FAILED";
        } else if (error.code === "ECONNREFUSED") {
          errorKey = "CONNECTION_REFUSED";
        } else if (error.code === "ETIMEDOUT" || error.message.includes("timeout")) {
          errorKey = "TIMEOUT";
        } else if (error.response?.status) {
          errorKey = `HTTP_${error.response.status}`;
        } else {
          errorKey = `NETWORK_${error.code || "UNKNOWN"}`;
        }

        this.trackError(errorKey, errorMessage);
      } else if (error instanceof Error) {
        errorMessage = error.message;
        this.trackError("GENERAL_ERROR", errorMessage);
      }

      this.metrics.push({
        timestamp: Date.now(),
        responseTime,
        statusCode,
        success: false,
        error: errorMessage,
        vuserId: vUserId,
      });
    }
  }

  private getDefaultHeaders(): Record<string, string> {
    const userAgents = [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      `BlastAPI-LoadTest/${Math.floor(Math.random() * 10000)}`,
    ];

    return {
      "User-Agent":
        userAgents[Math.floor(Math.random() * userAgents.length)] || "BlastAPI-LoadTest/8",
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    };
  }

  private isSuccessfulResponse(statusCode: number): boolean {
    // HTTP 2xx and 3xx are generally successful
    if (statusCode >= 200 && statusCode < 400) {
      return true;
    }

    return false;
  }

  private formatAxiosError(error: AxiosError): string {
    let message = error.message;

    if (error.response?.data) {
      const dataStr =
        typeof error.response.data === "string"
          ? error.response.data
          : JSON.stringify(error.response.data);
      message += ` | Response: ${dataStr.slice(0, 200)}`;
    }

    if (error.code) {
      message += ` | Code: ${error.code}`;
    }

    return message;
  }

  private trackError(errorKey: string, errorMessage: string, responseData?: unknown): void {
    if (!this.errorDetails.has(errorKey)) {
      this.errorDetails.set(errorKey, { count: 0, examples: [] });
    }

    const errorDetail = this.errorDetails.get(errorKey)!;
    errorDetail.count++;

    if (errorDetail.examples.length < 5) {
      // Store more examples
      let exampleMessage = errorMessage;
      if (responseData) {
        const dataStr =
          typeof responseData === "string" ? responseData : JSON.stringify(responseData);
        exampleMessage += ` | Data: ${dataStr.slice(0, 100)}`;
      }
      errorDetail.examples.push(exampleMessage);
    }
  }

  private async generateResults(): Promise<LoadTestResult> {
    if (this.metrics.length === 0) {
      logger.warn("No metrics collected during test");
      return {
        summary: this.getDefaultSummary(),
        metrics: [],
        healthChecks: this.getDefaultHealthChecks(),
        logs: [...this.logs, "WARNING: No metrics collected during test"],
      };
    }

    const responseTimes = this.metrics.map(m => m.responseTime);
    const successfulRequests = this.metrics.filter(m => m.success);
    const failedRequests = this.metrics.filter(m => !m.success);

    // Sort response times for percentile calculations
    responseTimes.sort((a, b) => a - b);

    // Calculate status code distribution
    const statusCodes: Record<string, number> = {};
    this.metrics.forEach(metric => {
      const code = metric.statusCode.toString();
      statusCodes[code] = (statusCodes[code] || 0) + 1;
    });

    // Calculate throughput over time (in 5-second windows)
    const timeSeriesMetrics = this.calculateTimeSeriesMetrics();

    const healthChecks = this.generateHealthChecks(responseTimes);

    const testDurationMs =
      Math.max(...this.metrics.map(m => m.timestamp)) -
      Math.min(...this.metrics.map(m => m.timestamp));
    const avgThroughput = testDurationMs > 0 ? (this.metrics.length / testDurationMs) * 1000 : 0;

    const summary: TestSummary = {
      avgThroughput,
      maxThroughput:
        timeSeriesMetrics.length > 0 ? Math.max(...timeSeriesMetrics.map(m => m.throughput)) : 0,
      vusersCreated: this.metrics.length || 0,
      minResponseTime: responseTimes.length > 0 ? Math.min(...responseTimes) : 0,
      avgResponseTime:
        responseTimes.length > 0
          ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
          : 0,
      p50ResponseTime: this.percentile(responseTimes, 0.5),
      p95ResponseTime: this.percentile(responseTimes, 0.95),
      p99ResponseTime: this.percentile(responseTimes, 0.99),
      maxResponseTime: responseTimes.length > 0 ? Math.max(...responseTimes) : 0,
      successRate:
        this.metrics.length > 0 ? (successfulRequests.length / this.metrics.length) * 100 : 0,
      errorRate:
        this.metrics.length > 0 ? (failedRequests.length / this.metrics.length) * 100 : 100,
      successfulRequests: successfulRequests.length,
      failedRequests: failedRequests.length,
      statusCodes,
    };

    return {
      summary,
      metrics: timeSeriesMetrics,
      healthChecks,
      logs: this.logs,
    };
  }

  private getDefaultSummary(): TestSummary {
    return {
      avgThroughput: 0,
      maxThroughput: 0,
      vusersCreated: 0,
      minResponseTime: 0,
      avgResponseTime: 0,
      p50ResponseTime: 0,
      p95ResponseTime: 0,
      p99ResponseTime: 0,
      maxResponseTime: 0,
      successRate: 0,
      errorRate: 100,
      successfulRequests: 0,
      failedRequests: 0,
      statusCodes: {},
    };
  }

  private getDefaultHealthChecks(): HealthCheck {
    return {
      totalChecks: 2,
      passedChecks: 0,
      failedChecks: 2,
      passPercentage: 0,
      overallStatus: "FAIL",
      results: [
        {
          checkName: "http.response_time.p95",
          threshold: 2000,
          actualValue: 0,
          passed: false,
          failureDetails: {
            description: "No successful requests to measure response time",
            impact: "Unable to determine API performance",
            suggestion: "Check API endpoint accessibility and authentication",
          },
        },
        {
          checkName: "http.response_time.p99",
          threshold: 5000,
          actualValue: 0,
          passed: false,
          failureDetails: {
            description: "No successful requests to measure response time",
            impact: "Unable to determine API performance",
            suggestion: "Check API endpoint accessibility and authentication",
          },
        },
      ],
    };
  }

  private calculateTimeSeriesMetrics(): TestMetrics[] {
    if (this.metrics.length === 0) return [];

    const windowSize = 5000; // 5 seconds
    const windows: Map<number, WindowTestMetric[]> = new Map();

    // Group metrics by time windows
    this.metrics.forEach(metric => {
      const windowStart = Math.floor(metric.timestamp / windowSize) * windowSize;
      if (!windows.has(windowStart)) {
        windows.set(windowStart, []);
      }
      windows.get(windowStart)!.push(metric);
    });

    // Calculate metrics for each window
    return Array.from(windows.entries())
      .sort(([a], [b]) => a - b)
      .map(([timestamp, windowMetrics]) => {
        const responseTimes = windowMetrics.map(m => m.responseTime).sort((a, b) => a - b);
        const activeVUsers = new Set(windowMetrics.map(m => m.vuserId)).size;
        const statusCodes = windowMetrics.map(m => m.statusCode);
        const mostCommonStatusCode = this.getMostFrequent(statusCodes);

        return {
          timestamp,
          throughput: windowMetrics.length / (windowSize / 1000), // requests per second
          statusCode: mostCommonStatusCode,
          vusersCreated: Math.max(...windowMetrics.map(m => m.vuserId)) + 1,
          vusersActive: activeVUsers,
          p95ResponseTime: this.percentile(responseTimes, 0.95),
          p99ResponseTime: this.percentile(responseTimes, 0.99),
        };
      });
  }

  private generateHealthChecks(responseTimes: number[]): HealthCheck {
    if (responseTimes.length === 0) {
      return this.getDefaultHealthChecks();
    }

    const checks: HealthCheckResult[] = [];
    let passedChecks = 0;

    // P95 response time check (should be under 2sec)
    const p95 = this.percentile(responseTimes, 0.95);
    const p95Check = {
      checkName: "http.response_time.p95",
      threshold: 2000,
      actualValue: Math.round(p95 * 100) / 100,
      passed: p95 < 2000,
      failureDetails:
        p95 >= 2000
          ? {
              description: `95% of requests took longer than ${Math.round(p95 * 100) / 100}ms`,
              impact: "High response times may indicate server performance issues",
              suggestion: "Consider optimizing server performance or reducing load",
            }
          : null,
    };
    checks.push(p95Check);
    if (p95Check.passed) passedChecks++;

    // P99 response time check (should be under 5sec)
    const p99 = this.percentile(responseTimes, 0.99);
    const p99Check = {
      checkName: "http.response_time.p99",
      threshold: 5000,
      actualValue: Math.round(p99 * 100) / 100,
      passed: p99 < 5000,
      failureDetails:
        p99 >= 5000
          ? {
              description: `99% of requests took longer than ${Math.round(p99 * 100) / 100}ms`,
              impact: "Very high response times affect user experience significantly",
              suggestion: "Critical performance optimization needed",
            }
          : null,
    };
    checks.push(p99Check);
    if (p99Check.passed) passedChecks++;

    const totalChecks = checks.length;
    const passPercentage = (passedChecks / totalChecks) * 100;

    let overallStatus: HealthCheckStatus = "PASS";
    if (passedChecks === 0) {
      overallStatus = "FAIL";
    } else if (passedChecks < totalChecks) {
      overallStatus = "PARTIAL";
    }

    return {
      totalChecks,
      passedChecks,
      failedChecks: totalChecks - passedChecks,
      passPercentage: Math.round(passPercentage * 100) / 100,
      overallStatus,
      results: checks,
    };
  }

  private percentile(arr: number[], p: number): number {
    if (arr.length === 0) return 0;
    const index = Math.ceil(arr.length * p) - 1;
    const safeIndex = Math.max(0, Math.min(index, arr.length - 1));
    return arr[safeIndex] ?? 0;
  }

  private getMostFrequent<T>(arr: T[]): T {
    if (arr.length === 0) {
      return 0 as unknown as T; // Return 0 for empty arrays
    }

    const frequency: Map<T, number> = new Map();
    arr.forEach(item => {
      frequency.set(item, (frequency.get(item) || 0) + 1);
    });

    let maxCount = 0;
    let mostFrequent: T = arr[0]!;
    frequency.forEach((count, item) => {
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = item;
      }
    });

    return mostFrequent;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public stop(): void {
    this.shouldStop = true;
    logger.info("Load test stop requested");
    this.logs.push(`Test stop requested at ${new Date().toISOString()}`);
  }

  public getStatus(): {
    isRunning: boolean;
    activeVUsers: number;
    totalRequests: number;
    successfulRequests: number;
    failedRequests: number;
  } {
    const successful = this.metrics.filter(m => m.success).length;
    const failed = this.metrics.filter(m => !m.success).length;

    return {
      isRunning: this.isRunning,
      activeVUsers: this.activeVUsers.size,
      totalRequests: this.metrics.length,
      successfulRequests: successful,
      failedRequests: failed,
    };
  }
}
