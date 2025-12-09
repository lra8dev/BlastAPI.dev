import { SummaryDetailsProps } from "../../_types";

export const SummaryDetails = ({ ...data }: SummaryDetailsProps) => {
  return (
    <header className="flex flex-col sm:flex-row w-full text-center dark:bg-zinc-900/90 transition-colors">
      <div className="flex items-center justify-between w-full py-2 sm:py-4 sm:border-r dark:border-neutral-700/30 hover:bg-muted/40 dark:hover:bg-zinc-950/30">
        <div className="w-full px-4 border-r dark:border-neutral-700/30">
          <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
            {data.vusersCreated.toLocaleString()}
          </h3>
          <p className="font-medium lowercase text-[0.8125rem] text-muted-foreground dark:text-neutral-400/60">
            vusers created
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 font-medium text-xs px-3 sm:px-4 md:px-6">
          <div className="w-full flex justify-between gap-2 text-neutral-800 dark:text-neutral-100 border-b dark:border-neutral-200/90">
            <h3 className="text-start">{data.successfulRequests.toLocaleString()} succeeded</h3>
            <p>{data.successRate}%</p>
          </div>
          <div className="w-full flex justify-between text-neutral-900 dark:text-neutral-50 border-b border-dotted dark:border-neutral-400">
            <h3>{data.failedRequests.toLocaleString()} failed</h3>
            <p>{data.errorRate}%</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full py-2 sm:py-4 hover:bg-muted/40 dark:hover:bg-zinc-950/30 max-sm:border-t dark:border-neutral-700/30">
        <div className="w-full px-4 border-r dark:border-neutral-700/30">
          <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
            {data.avgThroughput.toLocaleString()}
          </h3>
          <p className="font-medium lowercase text-[0.8125rem] text-muted-foreground dark:text-neutral-400/60">
            average req/s
          </p>
        </div>
        <div className="w-full px-4">
          <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
            {data.maxThroughput.toLocaleString()}
          </h3>
          <p className="font-medium lowercase text-[0.8125rem] text-muted-foreground dark:text-neutral-400/60">
            peak req/s
          </p>
        </div>
      </div>
    </header>
  );
};
