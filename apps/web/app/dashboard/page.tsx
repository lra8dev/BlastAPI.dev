"use server";

import { auth } from "@/auth";
import { fetchApi } from "@/lib/api";
import { CTACard } from "./_components/cta-card";
import { DashboardHeader } from "./_components/header";
import { TestsHistory } from "./_components/tests-history";
import { TestHistories } from "./_types";

const DashboardPage = async () => {
  const session = await auth();
  const { data, error } = await fetchApi<TestHistories>(`/test-history/${session?.user.id}`);

  if (error) {
    console.warn(`History unavailable: ${error.message}`);
  }

  return (
    <section className="flex flex-col w-full min-h-screen pb-14">
      <DashboardHeader data={data?.data} />
      <TestsHistory data={data?.data} />
      <CTACard isHistoryCount={!!data?.data?.length} />
    </section>
  );
};

export default DashboardPage;
