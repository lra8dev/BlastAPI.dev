"use server";

import { fetchApi } from "@/lib/api";
import { FilteringData, TestHistory } from "../../_types";
import { CTACard } from "../cta-card";
import { DashboardHeader } from "../header";
import { TestsHistory } from "../tests-history";

const transformToFilteringData = (tests: TestHistory[]): FilteringData[] => {
  return tests.map(data => ({
    test: { name: data.testConfig?.name },
    user: data.user,
  }));
};

export const DashboardContent = async ({ userId }: { userId: string }) => {
  const { data } = await fetchApi<TestHistory[]>(`/api/test-history/${userId}`);

  const tests = data ?? [];
  const filteringData = transformToFilteringData(tests);

  return (
    <>
      <DashboardHeader tests={filteringData} />
      <TestsHistory tests={tests} />
      <CTACard isHistoryCount={tests.length > 0} />
    </>
  );
};
