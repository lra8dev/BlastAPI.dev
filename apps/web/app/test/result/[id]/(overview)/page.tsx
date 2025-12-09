"use server";

import { validate as isValidId } from "uuid";
import { NotFound } from "@/components/not-found";
import { fetchApi } from "@/lib/api";
import { TestRunIdParams } from "@/types";
import { ErrorCheck } from "../_components/error-check";
import { HealthCheck } from "../_components/health-check";
import { ResultMetadata } from "../_components/result-metadata";
import { TestResult } from "../_types";

const TestOverviewPage = async ({ params }: TestRunIdParams) => {
  const { id } = await params;

  if (!isValidId(id.trim())) {
    return (
      <NotFound
        title="Test Not Found"
        description="The test you are looking for does not exist. Please check the URL, or head"
      />
    );
  }

  const { data, error } = await fetchApi<TestResult>({
    url: `/api/test/${id}`,
    options: { cache: "force-cache" },
  });

  if (error || !data) {
    return (
      <NotFound
        title="Test Not Found"
        description="The test you are looking for does not exist. Please check the URL, or head"
      />
    );
  }

  if (!data.testConfig || !data.healthCheckSummary) {
    return (
      <NotFound
        title="Incomplete Test Data"
        description="Some test data is missing. Please check the test configuration"
      />
    );
  }

  return (
    <section className="flex flex-col w-full gap-3 lg:flex-row md:gap-4 lg:gap-6 p-3 md:p-4 lg:p-6">
      <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        <div className="flex gap-3 max-md:flex-col md:gap-4 lg:gap-6">
          <HealthCheck checks={data.healthCheckSummary.healthCheckResults} />
          {/* WIP: Improve error track */}
          <ErrorCheck errorInfos={data.errorInfos} />
        </div>
      </div>
      <aside className="h-auto">
        <ResultMetadata
          id={data.id}
          startedAt={data.startedAt}
          duration={data.testConfig.duration}
          region={data.testConfig.region}
          user={data.user}
        />
      </aside>
    </section>
  );
};

export default TestOverviewPage;
