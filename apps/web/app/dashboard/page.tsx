import { Suspense } from "react";
import { DashboardContent } from "./_components/dashboard-content";
import { TestHistorySkeleton } from "./_components/test-history-skeleton";

const DashboardPage = async () => {
  return (
    <section className="flex flex-col w-full min-h-screen pb-14">
      <Suspense fallback={<TestHistorySkeleton />}>
        <DashboardContent />
      </Suspense>
    </section>
  );
};

export default DashboardPage;
