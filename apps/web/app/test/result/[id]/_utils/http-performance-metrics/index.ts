import { HttpPerformanceMetrics } from "../../_types";

interface PerformanceMetrics {
  name: string;
  value: number;
  label: string;
}

export const simplifiedPerformanceMetrics = (
  metrics: HttpPerformanceMetrics,
): PerformanceMetrics[] => {
  return [
    {
      name: "min",
      value: metrics.minResponseTime,
      label: metrics.minResponseTime.toFixed(2) + "ms",
    },
    {
      name: "mean",
      value: metrics.avgResponseTime,
      label: metrics.avgResponseTime.toFixed(2) + "ms",
    },
    {
      name: "p50",
      value: metrics.p50ResponseTime,
      label: metrics.p50ResponseTime.toFixed(2) + "ms",
    },
    {
      name: "p95",
      value: metrics.p95ResponseTime,
      label: metrics.p95ResponseTime.toFixed(2) + "ms",
    },
    {
      name: "p99",
      value: metrics.p99ResponseTime,
      label: metrics.p99ResponseTime.toFixed(2) + "ms",
    },
    {
      name: "max",
      value: metrics.maxResponseTime,
      label: metrics.maxResponseTime.toFixed(2) + "ms",
    },
  ];
};
