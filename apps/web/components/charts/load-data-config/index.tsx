"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { calculateChartData } from "@/utils/charts/calculate-config-chart-data";
import { ChartDataPoint, LoadDataConfigChartProps } from "../types";

const chartConfig = {
  totalRequests: {
    label: "Total Requests",
    color: "#3b82f6",
  },
  currentRate: {
    label: "Current Rate",
    color: "#10b981",
  },
};

export const LoadDataConfigChart = ({
  duration,
  requestRate,
  concurrency,
  totalRequests,
}: LoadDataConfigChartProps) => {
  const data = calculateChartData({ duration, requestRate, concurrency, totalRequests });

  const maxRequestsPerSecond = Math.min(requestRate, totalRequests / duration);
  const estimatedDuration = totalRequests / maxRequestsPerSecond;
  const actualDuration = Math.min(duration, estimatedDuration);

  return (
    <div className="w-full space-y-4">
      <ChartContainer config={chartConfig} className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 4, bottom: 6 }}
            accessibilityLayer
            desc="Total requests over time"
          >
            <CartesianGrid
              vertical={false}
              stroke="#e0dddd"
              strokeDasharray="3 3"
              className="dark:opacity-20"
            />

            <XAxis
              dataKey="second"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              label={{
                value: "Time (seconds)",
                position: "insideBottom",
                offset: -4,
                style: { textAnchor: "middle", fill: "#374151", fontSize: "12px", fontWeight: 600 },
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              label={{
                value: "Cumulative Requests",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#374151", fontSize: "12px", fontWeight: 600 },
              }}
            />

            <ChartTooltip
              content={({ active, payload, label }) => {
                if (!active || !payload || !payload.length) return null;

                const data = payload[0].payload as ChartDataPoint;

                return (
                  <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      Time: {label}
                    </p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between gap-4">
                        <span className="text-gray-600 dark:text-gray-400">Total Requests:</span>
                        <span className="font-mono font-medium text-blue-600 dark:text-blue-400">
                          {data.totalRequests.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-gray-600 dark:text-gray-400">Current Rate:</span>
                        <span className="font-mono font-medium text-green-600 dark:text-green-400">
                          {data.currentRate}/s
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-gray-600 dark:text-gray-400">Active Users:</span>
                        <span className="font-mono font-medium text-purple-600 dark:text-purple-400">
                          {data.concurrentUsers}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-gray-600 dark:text-gray-400">Remaining:</span>
                        <span className="font-mono font-medium text-gray-600 dark:text-gray-400">
                          {data.remainingRequests.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Area
              dataKey="totalRequests"
              type="monotone"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.2}
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#1d4ed8",
                stroke: "#ffffff",
                strokeWidth: 2,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-blue-600 dark:text-blue-400 font-medium">Max Rate</div>
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
            {maxRequestsPerSecond.toFixed(1)}/s
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-green-600 dark:text-green-400 font-medium">Est. Duration</div>
          <div className="text-lg font-bold text-green-700 dark:text-green-300">
            {actualDuration.toFixed(1)}s
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-purple-600 dark:text-purple-400 font-medium">Concurrency</div>
          <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
            {concurrency}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-950/20 p-3 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="text-gray-600 dark:text-gray-400 font-medium">Total Requests</div>
          <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
            {totalRequests.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};
