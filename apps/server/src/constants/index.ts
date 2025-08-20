import { HealthCheckThreshold } from "@/types";

export const DEFAULT_HEALTH_CHECKS: HealthCheckThreshold[] = [
  {
    id: "response_time_p95",
    name: "http.response_time.p95",
    metric: "p95",
    operator: "<",
    value: 2000,
    unit: "ms",
    description: "95th percentile response time should be under 2 seconds",
  },
  {
    id: "response_time_p99",
    name: "http.response_time.p99",
    metric: "p99",
    operator: "<",
    value: 5000,
    unit: "ms",
    description: "99th percentile response time should be under 5 seconds",
  },
];
