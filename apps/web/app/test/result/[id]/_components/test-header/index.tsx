"use server";

import { NavTabItems } from "@/components/nav-tab-items/index";
import { TestStatus } from "@/components/test-status";
import { CustTooltip } from "@/components/tooltip";
import { Button } from "@/components/ui/button";
import { TEST_STATUS_MAP } from "@/constants";
import { fetchApi } from "@/lib/api";
import { TEST_SUMMARY_ACTIONS } from "../../_constants";
import { TestResultSummary } from "../../_types";
import { getResultSummaryTabs } from "../../_utils/get-summary-tabs";
import { HeaderMoreActions } from "../header-more-actions";

interface TestHeaderProps {
  testRunId: string;
}

export const TestHeader = async ({ testRunId }: TestHeaderProps) => {
  const { data, error } = await fetchApi<TestResultSummary>({
    url: `/api/test/${testRunId}`,
    options: { cache: "force-cache" },
  });

  if (error || !data) {
    return null;
  }

  const overallStatus = data.healthCheckSummary?.overallStatus ?? "FAIL";
  const { icon, className, label } = TEST_STATUS_MAP[overallStatus];
  const navTabs = getResultSummaryTabs(testRunId);

  return (
    <header className="sticky z-50 top-0 border-y bg-white dark:bg-dark-2 dark:border-neutral-700/30 shadow-xs p-3 md:px-4 lg:px-6">
      <nav className="w-full flex flex-col min-[478px]:flex-row min-[478px]:items-center min-[478px]:justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <CustTooltip content={label} className={"rounded-full " + className} side="bottom">
              <TestStatus
                icon={icon}
                className={className}
                passedChecks={data.healthCheckSummary?.passedChecks ?? 0}
                failedChecks={data.healthCheckSummary?.failedChecks ?? 0}
                totalChecks={data.healthCheckSummary?.totalChecks ?? 2}
              />
            </CustTooltip>

            <h3 className="font-semibold text-xs md:text-[0.8125rem] text-neutral-700 dark:text-gray-200">
              {data.testConfig?.name ?? testRunId}
            </h3>
          </div>

          <NavTabItems tabItems={navTabs} className="max-md:hidden" />
        </div>

        <div className="flex items-center max-[478px]:self-end gap-2">
          {/* WIP: Implement logs */}
          {TEST_SUMMARY_ACTIONS?.map(action => (
            <Button
              key={action.id}
              size="sm"
              disabled
              variant="primary"
              className="font-semibold text-xs bg-neutral-100 border-neutral-200 hover:bg-muted/50 dark:bg-white/8 dark:text-neutral-300/80 dark:border-neutral-700/40 dark:hover:bg-white/10 dark:hover:brightness-110 gap-1 md:gap-2 md:text-[0.8125rem]"
            >
              <action.icon className="size-3 md:size-3.25" aria-hidden="true" />
              {action.name}
            </Button>
          ))}

          <HeaderMoreActions testRunId={testRunId} testName={data.testConfig?.name} />
        </div>
      </nav>

      <nav className="md:hidden w-full sticky top-0 z-50 pt-2">
        <NavTabItems tabItems={navTabs} />
      </nav>
    </header>
  );
};
