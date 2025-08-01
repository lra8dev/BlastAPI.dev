"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export const TestNotFound = () => {
  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => {
    router.replace(pathname);
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center my-16 lg:my-24 font-inter">
      <h3 className="text-base font-bold text-neutral-700 dark:text-neutral-100">No tests found</h3>
      <p className="font-normal text-[.8125rem] text-neutral-600 dark:text-neutral-300/70">
        We can’t find any tests based on your filters
      </p>
      <Button
        size="xs"
        variant="primary"
        className="font-semibold bg-neutral-100 dark:bg-dark-3 shadow-none dark:text-gray-200 dark:border-neutral-700/30 dark:hover:brightness-110 text-neutral-600 border-neutral-200 hover:bg-neutral-200/60"
        onClick={clearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
};
