"use client";

import { Circle } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const barStyle = (name: string) => {
  switch (name) {
    case "min":
      return "#60A5FA";
    case "mean":
      return "#93C5FD";
    case "p95":
      return "#BFDBFE";
    case "p99":
      return "#3B82F6";
    default:
      return "#1E3A8A";
  }
};

export const HttpPerformanceChart = ({ data }: HttpPerformanceChartProps) => {
  return (
    <div className="relative w-full flex justify-between">
      <ChartContainer config={{}} className="w-full h-[250px]">
        <BarChart data={data} layout="vertical" barGap={13} barCategoryGap={13} accessibilityLayer>
          <CartesianGrid stroke="#2e3135" strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#2e3135"
            tick={{ fill: "#bbb", fontSize: 12 }}
          />

          <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barStyle(entry.name)} />
            ))}
            <LabelList dataKey="value" position="right" formatter={(v: number) => `${v}ms`} />
          </Bar>
        </BarChart>
      </ChartContainer>
      <div className="absolute -bottom-2 z-10 left-1/4 font-normal text-[0.8125rem] text-gray-400/60">
        Http response time distribution
      </div>
      <div className="flex w-3/5">
        <div className="flex flex-col gap-2 pr-5 pt-5 border-r border-neutral-700/30">
          {data.map((entry, index) => (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: barStyle(entry.name) }}
              />
              <span className="font-medium text-xs text-gray-300/70">{entry.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2 font-jetbrains font-light text-xs p-5 border-b border-neutral-700/30">
            <div className="flex items-center justify-between text-orange-500">
              <p>5.95M requests</p>
              <p>–</p>
            </div>
            <div className="flex items-center justify-between text-pink-500">
              <p>5.95M responses</p>
              <p>–</p>
            </div>
          </div>
          <div className="relative font-inter mt-5 pr-4 text-center">
            <div className="relative size-34 mx-auto">
              <Circle className="size-34 text-teal-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs font-normal text-gray-500/90">HTTP codes</span>
              </div>
            </div>
            <div className="absolute right-5 bottom-1 flex gap-2">
              <p className="-rotate-45 font-extralight text-xs text-teal-500">|</p>
              <div className="flex items-center font-jetbrains font-light border border-neon-green/25 rounded text-[11px] text-teal-500">
                <span className="bg-neon-green/15 px-1 py-0.5 border-r border-neon-green/10">
                  200
                </span>
                <span className="px-1 py-0.5">5.40M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
