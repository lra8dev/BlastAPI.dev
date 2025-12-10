"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const CustInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #3b82f6,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-md p-0.5 transition duration-300"
      >
        <Input
          type={type}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 placeholder:text-[.8125rem] flex w-full rounded-sm dark:bg-dark-3 dark:border-neutral-700/45 dark:text-gray-300/90 hover:brightness-110 bg-gray-50 px-3 text-sm text-neutral-500 transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-fiery-orange focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
CustInput.displayName = "CustInput";

export { CustInput };
