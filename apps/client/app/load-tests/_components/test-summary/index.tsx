import { HttpPerformanceChart } from "@/components/charts/http-performance";
import { LoadSummaryChart } from "@/components/charts/load-summary";
import { Card } from "@/components/global/card";
import { TestSummaryMetadata } from "@/hooks/test-summary-metadata";
import { SummaryHeader } from "../summary-header";
// import { SummaryTopCards } from "../summary-top-cards";

export const TestSummary = () => {
  // WIP: update this data later
  const chartData = [
    {
      time: "04:46:30 PM",
      http_request_rate: 1000,
      vus_created: 500,
      // vus_active: 900,
      http_response_time_p95: 400,
      http_response_time_p99: 350,
    },
    {
      time: "04:47:00 PM",
      http_request_rate: 1000,
      vus_created: 122,
      // vus_active: 1800,
      http_response_time_p95: 150,
      http_response_time_p99: 180,
    },
    {
      time: "04:48:00 PM",
      http_request_rate: 1100,
      vus_created: 200,
      // vus_active: 1810,
      http_response_time_p95: 160,
      http_response_time_p99: 190,
    },
    {
      time: "04:49:00 PM",
      http_request_rate: 2000,
      vus_created: 212,
      // vus_active: 3993,
      http_response_time_p95: 22,
      http_response_time_p99: 1211,
    },
    {
      time: "04:50:00 PM",
      http_request_rate: 21,
      vus_created: 322,
      // vus_active: 1199,
      http_response_time_p95: 21,
      http_response_time_p99: 221,
    },
    {
      time: "04:50:00 PM",
      http_request_rate: 1212,
      vus_created: 122,
      // vus_active: 1199,
      http_response_time_p95: 170,
      http_response_time_p99: 121,
    },
  ];

  const httpPChartData = [
    { name: "min", value: 55 },
    { name: "mean", value: 83 },
    { name: "p95", value: 144 },
    { name: "p99", value: 252 },
    { name: "max", value: 618 },
  ];

  const testResult = {
    id: "tp74c_jmq3rj7b95h7mnyp6m6jyztdpzbg4_e3x9",
    createdAt: "Jun 21, 2025, 2:08:44 PM",
    duration: "6m 27s",
    region: "us-east-1",
    resources: "4096 vCPU/8192 MiB",
    userEmail: "luckyrathod@gmail.com",
  };

  const summaryHeaderData = {
    vusersCreated: (5095).toLocaleString() || "0",
    totalReqCompleted: (5028).toLocaleString() || "0",
    successRate: 98.68, // WIP: add fallback value
    totalReqFailed: (0).toLocaleString() || "0",
    failureRate: 0, // WIP: add fallback value
    avgRequestPS: (25966).toLocaleString() || "0",
    peakRequestPS: (54754).toLocaleString() || "0",
  };

  return (
    <section className="w-full flex flex-col justify-between lg:flex-row gap-3 md:gap-4 lg:gap-6">
      <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* <SummaryTopCards /> */}
        <Card className="w-full flex flex-col gap-0 p-0">
          <header className="px-5 py-3.5">
            <h3 className="font-medium text-[0.8125rem] text-gray-300/75">Load summary</h3>
          </header>
          <SummaryHeader data={summaryHeaderData} />
          <div className="px-5 py-2.5">
            <LoadSummaryChart data={chartData} />
          </div>
        </Card>
        <Card className="w-full flex flex-col gap-0 p-0">
          <header className="px-5 py-3.5  border-b border-neutral-700/30">
            <h3 className="font-medium text-[0.8125rem] text-gray-300/75">HTTP performance</h3>
          </header>
          <div className="pb-4">
            <HttpPerformanceChart data={httpPChartData} />
          </div>
        </Card>
      </div>
      <aside className="flex-1">
        <TestSummaryMetadata testResult={testResult} />
        {/* WIP: <TestSummaryNotes /> */}
      </aside>
    </section>
  );
};
