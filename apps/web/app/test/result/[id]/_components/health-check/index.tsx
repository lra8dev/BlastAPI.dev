import { CircleCheck, CircleX, HelpCircle } from "lucide-react";
import { Badge } from "@/components/badge";
import { CustTooltip } from "@/components/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HealthCheckResult } from "../../_types";

export const HealthCheck = ({ checks }: HealthCheckResult) => {
  return (
    <Card className="w-full gap-0 p-0">
      <CardHeader className="px-5 py-3.5 border-b dark:border-neutral-700/30 gap-0">
        <CardTitle className="w-fit flex gap-1 font-medium text-[0.8125rem] text-neutral-600 dark:text-neutral-300/80">
          Checks
          <CustTooltip content="Health checks are used to monitor the health of your application.">
            <HelpCircle size={12} className="-mt-1 text-teal-600 hover:text-teal-300" aria-hidden />
          </CustTooltip>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 font-medium px-5 pt-3 pb-6">
        {checks.map(check => (
          <Badge
            key={check.checkName}
            className={cn(
              "flex items-center gap-2 text-[0.8125rem] backdrop-blur-md px-1.5 py-1",
              check.passed ? "success-color" : "danger-color",
            )}
          >
            {check.passed ? (
              <CircleCheck size={16} aria-hidden />
            ) : (
              <CircleX size={16} aria-hidden />
            )}
            {check.checkName} {"<"} {check.threshold}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};
