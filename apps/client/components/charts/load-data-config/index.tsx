"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  totalRequests: {
    label: "Total Requests",
    color: "#007bff4d",
  },
};

export const LoadDataConfigChart = ({
  duration,
  requestRate,
  concurrency,
  totalRequests,
}: LoadDataConfigChartProps) => {
  const step = duration > 120 ? 5 : 1;
  const data = Array.from({ length: Math.floor(duration / step) + 1 }, (_, i) => {
    const second = i * step;
    const total = Math.min(Math.round(second * requestRate), totalRequests);
    return {
      second: `${second}s`,
      totalRequests: total,
      requestRate,
      concurrency,
    };
  });

  return (
    <ChartContainer config={chartConfig} className="w-full h-[320px]">
      <AreaChart
        data={data}
        margin={{ top: 1, bottom: 14 }}
        accessibilityLayer
        desc="Total requests over time"
      >
        <CartesianGrid stroke="#ffffff13" vertical={false} />

        <XAxis
          dataKey="second"
          axisLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          label={{
            value: "Duration (seconds)",
            position: "center",
            dy: 24,
            fill: "var(--color-electric-blue)",
            fontSize: 12,
            fontWeight: 600,
          }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          label={{
            value: "Total Requests",
            angle: -90,
            position: "center",
            dx: -20,
            fill: "var(--color-primary-electric-blue)",
            fontSize: 12,
          }}
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

        <Area
          dataKey="totalRequests"
          type="stepAfter"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.1}
          strokeWidth={3}
          activeDot={{ r: 7, fill: "#1e3a8a", stroke: "#ffffff7a", strokeWidth: 6 }}
        />
      </AreaChart>
    </ChartContainer>
  );
};
