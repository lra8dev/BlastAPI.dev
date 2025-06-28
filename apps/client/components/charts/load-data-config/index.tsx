"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// WIP: improve later
const chartConfig = {
  totalRequests: {
    label: "Total Requests",
    color: "#007bff4d",
  },
};

export const LoadDataConfigChart = ({
  totalRequests,
  duration,
  requestRate,
  concurrency,
}: LoadDataConfigChartProps) => {
  const data = Array.from({ length: duration + 1 }, (_, second) => {
    const total = Math.min(Math.round(second * requestRate), totalRequests);
    return {
      second: `${second}s`,
      totalRequests: total,
      requestRate,
      concurrency,
    };
  });

  return (
    <ChartContainer config={chartConfig} className="size-full bg-electric-blue/4">
      <AreaChart data={data} width={600} height={300} accessibilityLayer>
        <CartesianGrid stroke="#ffffff13" vertical={false} />
        <XAxis
          dataKey="second"
          axisLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          tickFormatter={value => value.slice(0, 3)}
          label={{
            value: "Duration (seconds)",
            position: "center",
            dy: 14,
            fill: "#9ca3af",
            fontSize: 12,
          }}
        />

        <YAxis
          // domain={[0, "dataMax + 2"]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          label={{
            value: "Total Requests",
            angle: -90,
            position: "center",
            dx: -20,
            fill: "#9ca3af",
            fontSize: 12,
          }}
        />

        <ChartTooltip content={<ChartTooltipContent hideLabel={false} cursor={false} />} />
        <Area
          dataKey="totalRequests"
          type="stepAfter"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.2}
          strokeWidth={3}
          activeDot={{ r: 5, fill: "#1e3a8a", stroke: "#ffffff9a", strokeWidth: 3 }}
        />
      </AreaChart>
    </ChartContainer>
  );
};
