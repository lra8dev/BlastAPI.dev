import { HelpCircle, ThumbsUp } from "lucide-react";
import { CustTooltip } from "@/components/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorCheckProps } from "../../_types";

export const ErrorCheck = ({ errorInfos }: ErrorCheckProps) => {
  return (
    <Card className="w-full gap-0 p-0">
      <CardHeader className="px-5 py-3.5 border-b dark:border-neutral-700/30 gap-0">
        <CardTitle className="w-fit flex gap-1 font-medium text-[0.8125rem] text-neutral-600 dark:text-neutral-300/80">
          Errors
          <CustTooltip content="A list of errors encountered during this test run.">
            <HelpCircle size={12} className="-mt-1 text-teal-600 hover:text-teal-300" aria-hidden />
          </CustTooltip>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 px-5 py-3 font-medium text-[0.8125rem] text-neutral-500 dark:text-neutral-400 opacity-80">
        {errorInfos.length === 0 ? (
          <>
            <ThumbsUp size={15} aria-hidden />
            <p>No errors encountered during this test run.</p>
          </>
        ) : (
          <ul className="list-disc flex flex-col gap-2">
            {errorInfos.map(errorInfo => (
              <li key={errorInfo.id}>{errorInfo.message}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
