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
    <div className="w-full flex flex-col-reverse md:flex-row justify-between">
      <div className="relative w-full">
        <ChartContainer config={{}} className="w-full h-[250px]">
          <BarChart
            data={data}
            layout="vertical"
            barGap={13}
            barCategoryGap={13}
            accessibilityLayer
          >
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

        <div className="flex flex-col gap-2 absolute right-2 top-1/4 sm:right-6">
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
      </div>

      <div className="w-full md:w-1/2 md:border-l max-md:border-b border-neutral-700/30">
        <div className="flex flex-col w-full gap-2 font-jetbrains font-light text-xs p-5 border-b border-neutral-700/30">
          <div className="flex items-center justify-between text-orange-500">
            <p>5.95M requests</p>
            <p>-</p>
          </div>
          <div className="flex items-center justify-between text-pink-500">
            <p>5.95M responses</p>
            <p>-</p>
          </div>
        </div>

        <div className="relative w-fit mx-auto p-4 text-center">
          <div className="relative size-34 mx-auto">
            <Circle className="size-34 text-teal-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-inter font-medium text-gray-500/90">HTTP codes</span>
            </div>

            <div className="absolute bottom-0 right-0 translate-x-2/3 translate-y-1/15 flex gap-1">
              <span className="-rotate-42 font-extralight text-[8px] text-teal-500">|</span>
              <div className="flex items-center font-jetbrains font-light border border-teal-500/40 rounded text-[11px] text-teal-500 overflow-hidden bg-black/40 backdrop-blur-md">
                <span className="bg-teal-500/15 px-1 py-0.5 border-r border-teal-500/20">200</span>
                <span className="px-1 py-0.5">5.95M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
