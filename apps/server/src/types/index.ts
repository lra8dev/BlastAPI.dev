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
