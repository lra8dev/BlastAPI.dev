import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LoadTestConfig } from "../../_types";
import { calculateChartData } from "../../_utils";

const chartConfig = {
  vusers: {
    label: "Virtual Users",
    color: "var(--electric-blue)",
  },
};

// WIP: Improve the area chart to better represent ramp-up behavior (total duration = ramp-up time + test duration)
export const LoadConfigAreaChart = ({
  vusers,
  duration,
  rampUpTime,
  rampUpSteps,
}: LoadTestConfig) => {
  const data = calculateChartData({ duration, vusers, rampUpTime, rampUpSteps });

  return (
    <ChartContainer config={chartConfig} className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ bottom: 8, right: 8, left: 8 }}>
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis
            dataKey="duration"
            tick={{ fontSize: 10 }}
            tickMargin={4}
            interval="preserveStartEnd"
            label={{
              value: "DURATION",
              position: "insideBottom",
              offset: -5,
              style: {
                textAnchor: "middle",
                fill: "var(--electric-blue)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.05em",
              },
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
            domain={[0, "dataMax + 10"]}
            label={{
              value: "VIRTUAL USERS",
              angle: -90,
              position: "insideLeft",
              style: {
                textAnchor: "middle",
                fill: "var(--electric-blue)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.05em",
              },
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
            dataKey="vusers"
            type="stepAfter"
            stroke="var(--electric-blue)"
            fill="var(--electric-blue)"
            fillOpacity={0.1}
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: "var(--electric-blue)",
              stroke: "var(--primary)",
              strokeOpacity: 0.2,
              strokeWidth: 8,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
