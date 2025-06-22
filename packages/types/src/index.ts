export interface TestConfig {
  name: string;
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  totalRequests: number;
  concurrency: number;
  duration?: number;
  requestRate?: number;
  headers?: string;
  body?: string;
}

export interface JobPayload {
  testRunId: string;
  testConfig: TestConfig;
}

export interface TestResult {
  testRunId: string; // WIP: Add test name
  totalRequests: number;
  completed: number;
  failed: number;
  duration: number; // in seconds
  avgResponseTime: number;
  maxResponseTime: number;
  errorRate: number;
}
