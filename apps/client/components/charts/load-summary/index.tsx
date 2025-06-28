"use client";

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  http_request_rate: {
    label: "http.request_rate",
    color: "var(--chart-3)",
  },
  vus_created: {
    label: "vus.created",
    color: "var(--chart-4)",
  },
  // vus_active: {
  //   label: "vus.active",
  //   color: "var(--chart-3)",
  // },
  http_response_time_p95: {
    label: "http.response_time_p95",
    color: "var(--chart-1)",
  },
  http_response_time_p99: {
    label: "http.response_time_p99",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const activeDotStyle = {
  r: 5,
  strokeOpacity: "0.2",
  strokeWidth: 12,
};

export const LoadSummaryChart = ({ data }: LoadSummaryChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[300px]">
      <LineChart data={data} className="py-1" accessibilityLayer>
        <CartesianGrid stroke="#2e3135" strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="time"
          stroke="#2e3135"
          tickMargin={4}
          tick={{ fontSize: "11px" }}
          tickFormatter={value => value.slice(0, 11)}
        />
        <YAxis
          stroke="#2e3135"
          tickLine={false}
          tick={{ fontSize: "11px" }}
          domain={[0, "dataMax + 100"]}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              hideLabel={false}
              cursor={false}
              labelClassName="text-gray-300/70 px-4 pb-2 border-b border-neutral-700/40"
              className="font-inter bg-dark-5 rounded border border-neutral-700/30"
            />
          }
        />
        <Legend align="center" />
        <Line
          type="monotone"
          dataKey="http_request_rate"
          stroke="var(--color-http_request_rate)"
          strokeWidth={2}
          dot={false}
          activeDot={{ ...activeDotStyle, stroke: "var(--color-http_request_rate)" }}
        />
        <Line
          type="monotone"
          dataKey="vus_created"
          stroke="var(--color-vus_created)"
          strokeWidth={2}
          dot={false}
          activeDot={{ ...activeDotStyle, stroke: "var(--color-vus_created)" }}
        />
        <Line
          type="monotone"
          dataKey="http_response_time_p95"
          stroke="var(--color-http_response_time_p95)"
          strokeWidth={2}
          dot={false}
          activeDot={{ ...activeDotStyle, stroke: "var(--color-http_response_time_p95)" }}
        />
        <Line
          type="monotone"
          dataKey="http_response_time_p99"
          stroke="var(--color-http_response_time_p99)"
          strokeWidth={2}
          dot={false}
          activeDot={{ ...activeDotStyle, stroke: "var(--color-http_response_time_p99)" }}
        />
      </LineChart>
    </ChartContainer>
  );
};
