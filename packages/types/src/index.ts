export interface TestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  totalRequests: number;
  concurrency: number;
  duration?: number;
  requestRate?: number;
  headers?: Record<string, string>;
  body?: any;
}

export interface JobPayload {
  testRunId: string;
  testConfig: TestConfig;
}

export interface TestResult {
  testRunId: string;
  totalRequests: number;
  completed: number;
  failed: number;
  duration: number; // in seconds
  avgResponseTime: number;
  maxResponseTime: number;
  errorRate: number;
}
