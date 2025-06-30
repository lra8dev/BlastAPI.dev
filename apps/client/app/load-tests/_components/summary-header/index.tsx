export const SummaryHeader = ({ data }: SummaryHeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row w-full text-center bg-zinc-900/90 border-y border-neutral-700/30">
      <div className="flex items-center justify-between w-full py-2 sm:py-4 sm:border-r border-neutral-700/30 hover:bg-zinc-950/30">
        <div className="w-full px-4 border-r border-neutral-700/30">
          <h3 className="font-semibold text-lg text-neutral-100">{data.vusersCreated}</h3>
          <p className="font-medium lowercase text-[0.8125rem] text-neutral-400/60">
            vusers created
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 font-medium text-xs px-3 sm:px-4 md:px-6">
          <div className="w-full flex justify-between gap-2 text-neutral-100 border-b border-neutral-200/90">
            <h3 className="text-start">{data.totalReqCompleted} completed</h3>
            <p>{data.successRate}%</p>
          </div>
          <div className="w-full flex justify-between text-neutral-50 border-b border-dotted border-neutral-400">
            <h3>{data.totalReqFailed} failed</h3>
            <p>{data.failureRate}%</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full py-2 sm:py-4 hover:bg-zinc-950/30 max-sm:border-t border-neutral-700/30">
        <div className="w-full px-4 border-r border-neutral-700/30">
          <h3 className="font-semibold text-lg text-neutral-100">{data.avgRequestPS}</h3>
          <p className="font-medium lowercase text-[0.8125rem] text-neutral-400/60">
            average req/s
          </p>
        </div>
        <div className="w-full px-4">
          <h3 className="font-semibold text-lg text-neutral-100">{data.peakRequestPS}</h3>
          <p className="font-medium lowercase text-[0.8125rem] text-neutral-400/60">peak req/s</p>
        </div>
      </div>
    </header>
  );
};
