"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { formatCountdownTime } from "@/utils/time";
import { CountdownProps } from "../../_types";

export const Countdown = ({ totalDuration }: CountdownProps) => {
  const displayTime = Math.max(0, Math.floor(totalDuration));

  // Track initial duration for progress calculation (capture when test starts)
  const initialDurationRef = useRef<number>(0);

  // Update initial duration when we first get a valid duration
  useEffect(() => {
    if (totalDuration > 0 && initialDurationRef.current === 0) {
      initialDurationRef.current = totalDuration;
    }
    // Reset if totalDuration becomes much larger (page refresh with new data)
    if (totalDuration > initialDurationRef.current) {
      initialDurationRef.current = totalDuration;
    }
  }, [totalDuration]);

  const timeFormat = formatCountdownTime(displayTime);

  // Calculate progress based on initial duration
  const effectiveInitialDuration = initialDurationRef.current || totalDuration;
  const progress =
    effectiveInitialDuration > 0
      ? Math.max(
          0,
          Math.min(
            100,
            ((effectiveInitialDuration - displayTime) / effectiveInitialDuration) * 100,
          ),
        )
      : 0;

  // Circle properties for the progress arc
  const radius = 159.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const progressRadians = (progress / 100) * 2 * Math.PI;
  const angle = progressRadians - Math.PI / 2; // Start from top (-90 degrees)

  const containerSize = 320;
  const containerCenter = containerSize / 2;
  const dotRadius = 159.5 * (containerSize / 335);

  const dotX = containerCenter + dotRadius * Math.cos(angle);
  const dotY = containerCenter + dotRadius * Math.sin(angle);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-80 h-80">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 335 335">
          {/* Outer ring background */}
          <circle
            cx="167.5"
            cy="167.5"
            r="159.5"
            stroke="currentColor"
            strokeWidth="16"
            fill="none"
            className="text-gray-800 dark:text-gray-200 opacity-20"
          />

          {/* Inner ring border */}
          <circle
            cx="167.5"
            cy="167.5"
            r="159.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-300 dark:text-gray-600 opacity-60"
          />

          {/* Progress Arc */}
          <circle
            cx="167.5"
            cy="167.5"
            r="159.5"
            stroke="#00C2FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            style={{
              filter: "drop-shadow(0 0 8px rgba(0, 194, 255, 0.6))",
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />
        </svg>

        {/* Progress Dot */}
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${dotX - 6}px`,
            top: `${dotY - 6}px`,
            background: "#00C2FF",
            boxShadow: "0 0 12px rgba(0, 194, 255, 0.8), 0 0 24px rgba(0, 194, 255, 0.4)",
            transition: "left 1s ease-out, top 1s ease-out",
          }}
        />

        {/* Timer Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-light tracking-wide transition-all duration-300",
              timeFormat.isSecondsOnly ? "text-7xl" : "text-6xl",
            )}
            style={{
              color: "#00C2FF",
              filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))",
              textShadow: "0 0 20px rgba(0, 194, 255, 0.3)",
            }}
          >
            {timeFormat.display}
          </span>
        </div>
      </div>

      {/* WIP: add Run test in background */}
      {/* <div className="text-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
          Run test in background
        </p>
      </div> */}
    </div>
  );
};
