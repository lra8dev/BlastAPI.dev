import { ClassValue } from "clsx";
import { LucideIcon, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface TagButtonProps {
  tags?: string[];
  metadata: { icon: LucideIcon; label: string }[];
  className?: ClassValue;
}

export const Tags = ({ tags, metadata, className }: TagButtonProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {tags?.map(tab => (
        <Button
          variant="primary"
          key={tab}
          size="xs"
          className="font-semibold gap-1 text-xs dark:bg-dark-3 shadow-none dark:text-gray-200 dark:border-neutral-700/30 dark:hover:brightness-110 truncate max-w-36"
        >
          <Tag className="size-3" />
          {tab}
        </Button>
      ))}

      {metadata.map(data => (
        <Button
          size="xs"
          variant="primary"
          key={data.label}
          className="font-medium gap-1 text-xs bg-neutral-100 border-neutral-200 text-neutral-600 hover:bg-neutral-200/55 dark:bg-dark-3/50 shadow-none dark:text-gray-200/80 dark:border-neutral-700/20 dark:hover:brightness-110"
        >
          <data.icon className="size-3" />
          {data.label}
        </Button>
      ))}
    </div>
  );
};
