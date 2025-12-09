import { cn } from "@/lib/utils";
import { TestStatusProps } from "@/types";
import { Badge } from "../badge";

export const TestStatus = ({
  passedChecks,
  failedChecks,
  totalChecks,
  icon: Icon,
  className,
}: TestStatusProps) => {
  const currentChecks = Math.max(passedChecks, failedChecks);

  return (
    <Badge
      className={cn(
        "flex items-center gap-1 tracking-widest text-[0.6875rem] backdrop-blur-md px-1.5 py-1",
        className,
      )}
    >
      <Icon className="size-4" />
      {`${currentChecks}/${totalChecks}`}
    </Badge>
  );
};
