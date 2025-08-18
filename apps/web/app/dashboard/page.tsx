import { Suspense } from "react";
import { auth } from "@/auth";
import { DashboardContent } from "./_components/dashboard-content";
import { TestHistorySkeleton } from "./_components/test-history-skeleton";

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  return (
    <section className="flex flex-col w-full min-h-screen pb-14">
      <Suspense fallback={<TestHistorySkeleton />}>
        <DashboardContent userId={session.user.id} />
      </Suspense>
    </section>
  );
};

export default DashboardPage;
