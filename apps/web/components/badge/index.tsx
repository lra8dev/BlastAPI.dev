import { cn } from "@/lib/utils";
import { BadgeProps } from "@/types";

export const Badge = ({ children, className }: BadgeProps) => (
  <div
    className={cn(
      "font-medium dark:bg-dark-3 text-xs rounded-xl shadow-xs px-1.5 text-neutral-600 dark:text-gray-300/80 overflow-hidden border dark:border-neutral-600/22",
      className,
    )}
  >
    {children}
  </div>
);
