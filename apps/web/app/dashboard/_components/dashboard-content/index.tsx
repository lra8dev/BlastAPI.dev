"use server";

import { fetchApi } from "@/lib/api";
import { FilteringData, TestHistory } from "../../_types";
import { CTACard } from "../cta-card";
import { DashboardHeader } from "../header";
import { TestsHistory } from "../tests-history";

const transformToFilteringData = (tests: TestHistory["testRuns"]): FilteringData[] => {
  return tests.map(data => ({
    test: { name: data.testConfig?.name },
    user: data.user,
  }));
};

export const DashboardContent = async () => {
  const { data } = await fetchApi<TestHistory>({ url: "/api/test/history" });
  const tests = data?.testRuns ?? [];
  const filteringData = transformToFilteringData(tests);

  return (
    <>
      <DashboardHeader tests={filteringData} />
      <TestsHistory tests={tests} />
      <CTACard isHistoryCount={tests.length > 0} />
    </>
  );
};
