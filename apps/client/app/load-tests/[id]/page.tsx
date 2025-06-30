import { Header } from "@/components/global/header";
import { ChartBuilder } from "../_components/chart-builder";
import { LoadTestHeader } from "../_components/loadtest-header";
import { TestSummary } from "../_components/test-summary";

const TestSummaryPage = async ({ params }: TestSummaryParams) => {
  const { id } = await params;

  return (
    <main className="flex flex-col font-inter size-full bg-dark">
      <Header className="border-b-neutral-700/10" />
      <LoadTestHeader testRunId={id} />
      <section className="flex flex-col gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 lg:p-6">
        <TestSummary />
        <ChartBuilder />
      </section>
    </main>
  );
};

export default TestSummaryPage;
