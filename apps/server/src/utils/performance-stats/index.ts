import { PerformanceStats, RequestMetrics } from "@/types";
import { percentile } from "../percentile";

export const calPerformanceStats = (metrics: RequestMetrics[]): PerformanceStats => {
  if (metrics.length === 0) {
    return { p50: 0, p95: 0, p99: 0, avg: 0, min: 0, max: 0 };
  }

  const latencies = metrics.map(m => m.latency).sort((a, b) => a - b);
  const sum = latencies.reduce((a, b) => a + b, 0);

  return {
    p50: percentile(latencies, 50),
    p95: percentile(latencies, 95),
    p99: percentile(latencies, 99),
    avg: sum / latencies.length,
    min: latencies[0] || 0,
    max: latencies[latencies.length - 1] || 0,
  };
};
