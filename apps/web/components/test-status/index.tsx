import { CircleCheck, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { TestStatusProps } from "@/types";
import { Badge } from "../badge";

export const TestStatus = ({ success, ...rest }: TestStatusProps) => {
  return (
    <Badge
      className={cn(
        "flex items-center gap-1 text-[0.6875rem] backdrop-blur-md px-1.5 py-1",
        success ? "success-status" : "failed-status",
      )}
    >
      {success ? <CircleCheck className="size-4" /> : <CircleX className="size-4" />}
      {rest.passedChecks}/{rest.totalChecks}
    </Badge>
  );
};
