import {
  ErrorInfo,
  HealthCheckStatus,
  TestMetric,
  TestResult as TestResultType,
  TestStatus,
  UserRole,
} from "@blastapi/db/types";
import { TestRegions } from "@blastapi/validators";
import { LucideIcon } from "lucide-react";

interface User {
  name: string | null;
  email: string;
  image: string | null;
  role: UserRole;
}

interface HealthCheckSummary {
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  overallStatus: HealthCheckStatus;
}

export interface HealthCheck {
  checkName: string;
  threshold: number;
  actualValue: number;
  passed: boolean;
  failureDetails: Record<string, string> | null;
}

export interface TestResult {
  id: string;
  status: TestStatus;
  startedAt: Date | null;
  testConfig: {
    name: string;
    region: TestRegions;
    duration: number;
  } | null;
  testMetrics: Omit<TestMetric, "testRunId" | "id">[] | [];
  testResult: TestResultType | null;
  healthCheckSummary: (HealthCheckSummary & { healthCheckResults: HealthCheck[] }) | null;
  errorInfos: ErrorInfo[] | [];
  user: User;
}

export interface TestResultSummary {
  id: string;
  status: TestStatus;
  testConfig: {
    name: string;
  } | null;
  testResult: {
    logs: string[] | null;
  } | null;
  healthCheckSummary: HealthCheckSummary | null;
}

export interface HealthCheckResult {
  checks: HealthCheck[];
}

export interface SummaryDetailsProps {
  vusersCreated: number;
  successfulRequests: number;
  failedRequests: number;
  successRate: number;
  errorRate: number;
  avgThroughput: number;
  maxThroughput: number;
}

export interface HttpPerformanceMetrics {
  minResponseTime: number;
  avgResponseTime: number;
  p50ResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  maxResponseTime: number;
  totalRequests: number;
  totalResponses: number;
  statusCodes: Record<string, number>;
}

export interface HttpCodesProps {
  totalRequests: number;
  totalResponses: number;
  statusCodes: Record<string, number>;
}

export interface ResultMetadataProps {
  id: string;
  startedAt: Date | null;
  duration: number;
  region: string;
  resources?: string;
  user: Omit<User, "role">;
}

export interface ResultHeaderMoreActions {
  name: string;
  icon: LucideIcon;
  isSeparator?: boolean;
}

export interface ErrorCheckProps {
  errorInfos: ErrorInfo[] | [];
}

export interface DeleteTest {
  testId: string;
  deletedAt: Date;
  testName: string;
}

export interface LoadSummaryChartProps {
  metrics: {
    timetamp: Date;
    throughput: number;
    vusersCreated: number;
    vusersActive: number;
    p95ResponseTime: number;
    p99ResponseTime: number;
  }[];
}
