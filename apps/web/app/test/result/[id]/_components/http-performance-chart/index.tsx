"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts";
import { HttpPerformanceMetrics } from "@/app/test/result/[id]/_types";
import { simplifiedPerformanceMetrics } from "@/app/test/result/[id]/_utils/http-performance-metrics";
import { ChartContainer } from "@/components/ui/chart";
import { barChartConfig } from "../../_constants";

export const HttpPerformanceChart = ({ ...data }: HttpPerformanceMetrics) => {
  const metrics = simplifiedPerformanceMetrics(data);

  return (
    <div className="w-full relative pt-4 pb-6 pr-2">
      <ChartContainer config={barChartConfig} className="w-full h-75">
        <BarChart data={metrics} layout="vertical" margin={{ right: 52 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" tickMargin={2} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
            <LabelList dataKey="label" position="right" />
            {metrics.map(entry => (
              <Cell
                key={entry.name}
                fill={barChartConfig[entry.name as keyof typeof barChartConfig]?.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>

      <div className="absolute bottom-2.5 z-10 left-1/4 font-normal text-[0.8125rem] text-gray-400/60">
        Http response time distribution
      </div>
    </div>
  );
};
