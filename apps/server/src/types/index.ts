export interface CreateTestResult {
  testRunId: string;
  avgLatency: number;
  avgThroughput: number;
  totalRequests: number;
  successRate: number;
  errorRate: number;
}
