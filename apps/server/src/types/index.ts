import { HealthCheckResult as HltCkResult, HealthCheckStatus } from "@blastapi/db";

export interface RequestMetrics {
  latency: number;
  statusCode: number;
  success: boolean;
  timestamp: number;
  errorMessage?: string;
}

export interface PerformanceStats {
  p50: number;
  p95: number;
  p99: number;
  avg: number;
  min: number;
  max: number;
}

export type HealthCheckResult = Omit<HltCkResult, "id" | "healthCheckSummaryId">;

export interface HealthCheckSummary {
  testRunId: string;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  overallStatus: HealthCheckStatus;
  passPercentage: number;
  checks: HealthCheckResult[];
}

export interface PerformanceMetrics extends PerformanceStats {
  successRate: number;
  errorRate: number;
  totalRequests: number;
  failedRequests: number;
}

export interface HealthCheckThreshold {
  id: string;
  name: string;
  metric: "p99" | "p95" | "p90" | "avg" | "max" | "min";
  operator: "<" | ">" | "<=" | ">=" | "=" | "!=";
  value: number;
  unit: "ms" | "s" | "%" | "count";
  description?: string;
}
