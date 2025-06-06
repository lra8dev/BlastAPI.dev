export interface TestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  totalRequests: number;
  concurrency?: number;
  duration?: number;
  requestRate?: number;
  headers?: Record<string, string>;
  body?: any;
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

export interface CreateTestResult {
  testRunId: string;
  avgLatency: number;
  avgThroughput: number;
  totalRequests: number;
  successRate: number;
  errorRate: number;
}

export interface EnqueueTestJobInput {
  testRunId: string;
  testConfig: {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: Record<string, string>;
    body?: any;
    duration: number;
    concurrency: number;
  };
}
