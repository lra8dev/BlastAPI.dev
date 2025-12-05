import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: ClassValue;
}

export const Separator = ({ className }: SeparatorProps) => (
  <div
    className={cn(
      "my-4 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700",
      className,
    )}
  />
);
