import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { fetchApi } from "@/lib/api";
import { DashboardHeader } from "./_components/header";
import { HeroCard } from "./_components/hero-card";
import { TestsHistory } from "./_components/tests-history";
import { TestHistories } from "./_types";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect(`/signin?callbackUrl=${encodeURIComponent("/dashboard")}`);
  }

  const result = await fetchApi<TestHistories>(`/api/history/${session.user.id}`, {
    cache: "no-store",
  });

  const data = result?.data ?? [];

  return (
    <main className="flex flex-col w-full min-h-screen font-inter bg-white dark:bg-dark pb-14">
      <Header user={session.user} className="border-none" />
      <DashboardHeader data={data} />
      <TestsHistory data={data} />
      <HeroCard isHistoryAvailable={data.length !== 0} />
    </main>
  );
};

export default Dashboard;
