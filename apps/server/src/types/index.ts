import {
  HealthCheckResult as HealthCRType,
  HealthCheckStatus,
  HttpMethod,
} from "@blastapi/db/types";
import type { Socket } from "socket.io";

export interface TestJobData {
  testRunId: string;
  userId: string;
  config: LoadTestConfig;
}

export interface LoadTestConfig {
  url: string;
  method: HttpMethod;
  duration: number;
  vusers: number;
  rampUp: number;
  rampUpSteps: number;
  headers?: Record<string, string>;
  body?: Record<string, string>;
}

export interface WindowTestMetric {
  timestamp: number;
  responseTime: number;
  statusCode: number;
  success: boolean;
  error?: string;
  vuserId: number;
}

export interface TestMetrics {
  timestamp: number;
  throughput: number;
  statusCode: number;
  vusersCreated: number;
  vusersActive: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
}

export interface TestSummary {
  avgThroughput: number;
  maxThroughput: number;
  vusersCreated: number;
  minResponseTime: number;
  avgResponseTime: number;
  p50ResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  maxResponseTime: number;
  successRate: number;
  errorRate: number;
  successfulRequests: number;
  failedRequests: number;
  statusCodes: Record<string, number>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HealthCheckResult extends Omit<
  HealthCRType,
  "id" | "healthCheckSummaryId" | "createdAt"
> {}

export interface HealthCheck {
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  passPercentage: number;
  overallStatus: HealthCheckStatus;
  results: HealthCheckResult[];
}

export interface LoadTestResult {
  summary: TestSummary;
  metrics: TestMetrics[];
  healthChecks?: HealthCheck;
  logs?: string[];
}

export interface AuthenticatedSocket extends Socket {
  userId?: string;
  userRole?: "admin" | "user";
  userEmail?: string;
  sessionId?: string;
}

export interface SocketUser {
  id: string;
  email: string;
  role: "admin" | "user";
  sessionId: string;
}

export interface TestSubscription {
  testRunId: string;
  userId: string;
  socketId: string;
  subscribedAt: Date;
}
