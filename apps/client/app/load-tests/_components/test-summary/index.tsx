import { HttpPerformanceChart } from "@/components/charts/http-performance";
import { LoadSummaryChart } from "@/components/charts/load-summary";
import { Card } from "@/components/global/card";
import { TestSummaryMetadata } from "@/hooks/test-summary-metadata";
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

  return (
    <section className="w-full flex justify-between gap-3 md:gap-4 lg:gap-6">
      <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        {/* <SummaryTopCards /> */}
        <Card className="w-full flex flex-col gap-0 p-0">
          <div className="px-5 py-3.5">
            <h3 className="font-medium text-xs text-gray-300/75 md:text-sm">Load summary</h3>
          </div>
          <div className="flex w-full text-center bg-zinc-900/90 border-y border-neutral-700/30">
            <div className="flex items-center justify-between w-full py-4 border-r border-neutral-700/30 hover:bg-zinc-950/30">
              <div className="w-full px-4 border-r border-neutral-700/30">
                <h3 className="font-semibold text-lg text-neutral-100">5,095</h3>
                <p className="font-medium lowercase text-[0.8125rem] text-neutral-400/60">
                  vusers created
                </p>
              </div>
              <div className="w-full flex flex-col gap-3 font-medium text-xs px-6">
                <div className="w-full flex justify-between text-neutral-100 border-b border-neutral-200">
                  <h3>5,028 completed</h3>
                  <p>98.68%</p>
                </div>
                <div className="w-full flex justify-between text-neutral-50 border-b border-dotted border-neutral-400">
                  <h3>0 failed</h3>
                  <p>0%</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full py-4 hover:bg-zinc-950/30">
              <div className="w-full px-4 border-r border-neutral-700/30">
                <h3 className="font-semibold text-lg text-neutral-100">25,966</h3>
                <p className="font-medium lowercase text-[0.8125rem] text-neutral-400/60">
                  average req/s
                </p>
              </div>
              <div className="w-full px-4">
                <h3 className="font-semibold text-lg text-neutral-100">54,754</h3>
                <p className="font-medium lowercase text-[0.8125rem] text-neutral-400/60">
                  peak req/s
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 py-2.5">
            <LoadSummaryChart data={chartData} />
          </div>
        </Card>
        <Card className="w-full flex flex-col gap-0 p-0">
          <div className="px-5 py-3.5  border-b border-neutral-700/30">
            <h3 className="font-medium text-xs text-gray-300/75 md:text-sm">HTTP performance</h3>
          </div>
          <div className="pb-4">
            <HttpPerformanceChart data={httpPChartData} />
          </div>
        </Card>
      </div>
      <div>
        <TestSummaryMetadata />
        {/* WIP: <TestSummaryNotes /> */}
      </div>
    </section>
  );
};
