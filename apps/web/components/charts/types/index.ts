export interface LoadDataConfigChartProps {
  duration: number;
  requestRate: number;
  concurrency: number;
  totalRequests: number;
}

export interface ChartDataPoint {
  second: string;
  secondValue: number;
  totalRequests: number;
  currentRate: number;
  concurrentUsers: number;
  remainingRequests: number;
}

export interface LoadSummaryChartProps {
  data: {
    time: string;
    http_request_rate: number;
    vus_created: number;
    // vus_active: number;
    http_response_time_p95: number;
    http_response_time_p99: number;
  }[];
}

export interface HttpPerformanceChartProps {
  data: {
    name: string;
    value: number;
  }[];
}
