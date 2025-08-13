"use client";

import { Clock4, Globe } from "lucide-react";
import Link from "next/link";
import { Fragment, useMemo } from "react";
import { UserAvatar } from "@/components/avatar";
import { Tags } from "@/components/tag-buttons";
import { TestStatus } from "@/components/test-status";
import { CustTooltip } from "@/components/tooltip";
import { formatDateTime } from "@/utils/format-datetime";
import { formatDuration } from "@/utils/format-duration";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { getRelativeTime } from "@/utils/get-relative-time";
import { useNavigation } from "../../_hooks";
import { TestHistories } from "../../_types";
import { TestNotFound } from "../filter-not-found";
import { TestHistoryBadge } from "../history-badges";

export const TestsHistory = ({ data }: TestHistories) => {
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
      data?.filter(test => {
        if (filters.name && !test.testConfig.name.includes(filters.name)) {
          return false;
        }

        if (filters.status && test.status !== filters.status) {
          return false;
        }

        if (filters.email && test.user.email !== filters.email) {
          return false;
        }

        if (filters.createdAt && formatDateTime(test.createdAt) !== filters.createdAt) {
          return false;
        }

        if (filters.notes && !test.notes) {
          return false;
        }

        return true;
      }),
    [data, filters],
  );

  if (!data || data.length === 0 || !filteredData) {
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
          {} as Record<string, TestHistories["data"]>,
        ),
      ).map(
        ([createdDate, tests]) =>
          tests && (
            <Fragment key={createdDate}>
              <header className="w-full flex items-center gap-2 dark:bg-dark-5 px-4 py-0.5 font-medium leading-5 text-[0.8125rem] border-b dark:border-neutral-700/30 text-neutral-600 dark:text-gray-300/85 md:px-22">
                <p>{createdDate}</p>
                <span className="opacity-50">–</span>
                <p className="opacity-75">{getRelativeTime(tests[0].createdAt)}</p>
              </header>

              {tests.map(test => (
                <Link
                  key={test.id}
                  role="row"
                  href={`/test/result/${test.id}`}
                  className="flex items-center justify-between gap-2 flex-wrap overflow-hidden lg:gap-3 w-full font-medium border-b dark:border-neutral-700/30 dark:hover:bg-neutral-200/2 hover:bg-neutral-50/50 cursor-pointer space-y-1 px-4 py-1 lg:px-6"
                >
                  <div className="flex items-center gap-x-2 lg:gap-x-3">
                    <TestStatus
                      passedChecks={test.healthCheckSummary.passedChecks}
                      totalChecks={test.healthCheckSummary.totalChecks}
                      success={
                        test.healthCheckSummary.overallStatus === "PASS" &&
                        test.status === "Succeeded"
                      }
                    />
                    <div className="flex flex-col max-w-xs">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[0.8125rem] text-neutral-600 dark:text-gray-300 truncate">
                          {test.user.name}
                        </h3>
                        <TestHistoryBadge notesLength={test.notes?.length} />
                      </div>
                      <p className="hidden font-jetbrains font-extralight text-[0.6rem] text-muted-foreground opacity-70 truncate min-[55rem]:block">
                        {test.id}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <Tags
                      className="hidden sm:flex"
                      metadata={[
                        { icon: Globe, label: test.testConfig.region },
                        { icon: Clock4, label: formatDuration(test.testConfig.duration) },
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
                      { icon: Globe, label: test.testConfig.region },
                      { icon: Clock4, label: formatDuration(test.testConfig.duration) },
                    ]}
                  />
                </Link>
              ))}
            </Fragment>
          ),
      )}
    </div>
  );
};
