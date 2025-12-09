import { HelpCircle } from "lucide-react";
import { HttpPerformanceChart } from "@/app/test/result/[id]/_components/http-performance-chart";
import { CustTooltip } from "@/components/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HttpPerformanceMetrics } from "../../_types";
import { HttpCodes } from "../http-codes";

export const HttpPerformanceContent = ({ ...data }: HttpPerformanceMetrics) => {
  return (
    <Card className="w-full gap-0 p-0">
      <CardHeader className="px-5 py-3.5 border-b dark:border-neutral-700/30 gap-0">
        <CardTitle className="w-fit flex gap-1 font-medium text-[0.8125rem] text-neutral-600 dark:text-neutral-300/80">
          HTTP performance
          <CustTooltip content="Breakdown of HTTP requests and HTTP response time distribution">
            <HelpCircle size={12} className="-mt-1 text-teal-600 hover:text-teal-300" aria-hidden />
          </CustTooltip>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex max-md:flex-col-reverse p-0">
        <HttpPerformanceChart {...data} />
        <HttpCodes
          totalRequests={data.totalRequests}
          totalResponses={data.totalResponses}
          statusCodes={data.statusCodes}
        />
      </CardContent>
    </Card>
  );
};
