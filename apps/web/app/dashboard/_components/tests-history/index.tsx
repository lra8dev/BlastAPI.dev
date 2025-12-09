"use client";

import { Clock4, Globe } from "lucide-react";
import Link from "next/link";
import { Fragment, useMemo } from "react";
import { UserAvatar } from "@/components/avatar";
import { Tags } from "@/components/tag-buttons";
import { TestStatus } from "@/components/test-status";
import { CustTooltip } from "@/components/tooltip";
import { TEST_STATUS_MAP } from "@/constants";
import { formatDuration } from "@/utils/format-duration";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { formatDateTime } from "@/utils/time/format-datetime";
import { getRelativeTime } from "@/utils/time/get-relative-time";
import { useNavigation } from "../../_hooks";
import { TestHistory } from "../../_types";
import { TestNotFound } from "../filter-not-found";
import { TestHistoryBadge } from "../history-badges";

interface TestHistoryProps {
  tests: TestHistory["testRuns"];
}

export const TestsHistory = ({ tests }: TestHistoryProps) => {
  const { getSearchParam } = useNavigation();

  const filters = useMemo(
    () => ({
      name: getSearchParam("tags") ?? "",
      status: getSearchParam("status") ?? "",
      email: getSearchParam("user") ?? "",
      createdAt: getSearchParam("created") ?? "",
      notes: getSearchParam("notes") === "true",
    }),
    [getSearchParam],
  );

  const filteredData = useMemo(
    () =>
      tests.filter(test => {
        if (filters.name && !test.testConfig?.name.includes(filters.name)) {
          return false;
        }

        if (filters.status && test.status !== filters.status) {
          return false;
        }

        if (filters.email && test.user.email !== filters.email) {
          return false;
        }

        if (
          filters.createdAt &&
          formatDateTime(test.createdAt).split(",")[0] !== filters.createdAt
        ) {
          return false;
        }

        if (filters.notes && !test.testResult?.notes?.length) {
          return false;
        }

        return true;
      }),
    [tests, filters],
  );

  if (filteredData.length === 0) {
    if (Object.values(filters).some(value => value)) {
      return <TestNotFound />;
    }

    return null;
  }

  return (
    <div aria-label="Load Tests" role="table" className="w-full flex flex-col">
      {Object.entries(
        filteredData.reduce(
          (groups, test) => {
            const createdDate = formatDateTime(test.createdAt).split(",")[0];

            if (!groups[createdDate]) {
              groups[createdDate] = [];
            }

            groups[createdDate].push(test);

            return groups;
          },
          {} as Record<string, TestHistory["testRuns"]>,
        ),
      ).map(([createdDate, tests]) => (
        <Fragment key={createdDate}>
          <header className="w-full backdrop-blur-sm flex items-center gap-2 dark:bg-dark-5 px-4 py-1 font-medium leading-5 text-[0.8125rem] border-b dark:border-neutral-700/30 text-neutral-600/80 dark:text-gray-300/70 md:px-22">
            <p>{createdDate}</p>
            <span className="opacity-50">–</span>
            <p className="opacity-75">{getRelativeTime(tests[0].createdAt)}</p>
          </header>

          {tests.map(test => {
            const { icon, className, label } =
              TEST_STATUS_MAP[test.healthCheckSummary?.overallStatus ?? "FAIL"];

            return (
              <Link
                key={test.id}
                role="row"
                href={`/test/result/${test.id}`}
                className="flex items-center justify-between gap-2 flex-wrap overflow-hidden lg:gap-3 w-full font-medium border-b dark:border-neutral-700/30 dark:hover:bg-neutral-200/2 hover:bg-neutral-50/50 cursor-pointer px-4 py-1.5 lg:px-6"
              >
                <div className="flex items-center gap-2 lg:gap-x-3">
                  <CustTooltip content={label} className={"rounded-full " + className} side="right">
                    <TestStatus
                      icon={icon}
                      className={className}
                      passedChecks={test.healthCheckSummary?.passedChecks ?? 0}
                      totalChecks={test.healthCheckSummary?.totalChecks ?? 2}
                      failedChecks={test.healthCheckSummary?.failedChecks ?? 0}
                    />
                  </CustTooltip>
                  <div className="flex flex-col max-w-xs">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[0.8125rem] text-neutral-700 dark:text-gray-200 truncate">
                        {test.testConfig?.name || "Untitled Test"}
                      </h3>
                      <TestHistoryBadge notesLength={test.testResult?.notes?.length} />
                    </div>
                    <p className="max-[53rem]:hidden font-jetbrains font-extralight text-[0.6rem] text-muted-foreground opacity-70 truncate">
                      {test.id}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <Tags
                    className="max-sm:hidden"
                    metadata={[
                      { icon: Globe, label: test.testConfig?.region ?? "NA" },
                      { icon: Clock4, label: formatDuration(test.testConfig?.duration ?? 0) },
                    ]}
                  />
                  <div className="flex items-center gap-2">
                    <CustTooltip content={formatDateTime(test.createdAt)}>
                      <p className="text-xs text-neutral-500/90 dark:text-gray-300/70">
                        {getRelativeTime(test.createdAt)}
                      </p>
                    </CustTooltip>
                    <CustTooltip label="Started by" content={test.user.name ?? test.user.email}>
                      <UserAvatar
                        url={test.user.image ?? undefined}
                        fallbackChar={generateFallbackChars(test.user.name ?? test.user.email)}
                        className="size-5"
                      />
                    </CustTooltip>
                  </div>
                </div>
                <Tags
                  className="sm:hidden"
                  metadata={[
                    { icon: Globe, label: test.testConfig?.region ?? "NA" },
                    { icon: Clock4, label: formatDuration(test.testConfig?.duration ?? 0) },
                  ]}
                />
              </Link>
            );
          })}
        </Fragment>
      ))}
    </div>
  );
};
