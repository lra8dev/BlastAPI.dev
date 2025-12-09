"use client";

import { useMemo } from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { formatNumberSuffix } from "@/utils/format-number-suffix";
import { formatTime } from "@/utils/time";
import { lineChartConfig } from "../../_constants";
import { LoadSummaryChartProps } from "../../_types";

export const LoadSummaryChart = ({ metrics }: LoadSummaryChartProps) => {
  const chartData = useMemo(() => {
    if (!metrics?.length) return [];
    return metrics.map(metric => ({
      time: formatTime(metric.timetamp),
      http_request_rate: metric.throughput,
      vus_created: metric.vusersCreated,
      vus_active: metric.vusersActive,
      http_response_time_p95: metric.p95ResponseTime,
      http_response_time_p99: metric.p99ResponseTime,
    }));
  }, [metrics]);

  return (
    <ChartContainer config={lineChartConfig} className="w-full h-87.5">
      <LineChart data={chartData} className="py-1">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="time" tickMargin={4} tick={{ fontSize: "11px" }} />
        <YAxis
          tickLine={false}
          tick={{ fontSize: "11px" }}
          domain={[0, "dataMax + 10"]}
          tickFormatter={(value: number) => formatNumberSuffix(value)}
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
        <Legend />
        {Object.entries(lineChartConfig).map(([key, { color }]) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              strokeOpacity: "0.2",
              strokeWidth: 12,
              stroke: color,
            }}
          />
        ))}
      </LineChart>
    </ChartContainer>
  );
};
