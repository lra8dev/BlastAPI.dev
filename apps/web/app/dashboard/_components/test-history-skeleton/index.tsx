export const TestHistorySkeleton = () => (
  <div className="w-full flex flex-col animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="border-b dark:border-neutral-700/30 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="flex flex-col gap-2">
              <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
