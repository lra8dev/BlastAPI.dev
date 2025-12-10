import { NavTabProps } from "@/types";

export const getResultSummaryTabs = (testRunId: string): NavTabProps["tabItems"] => [
  { name: "Overview", route: `/test/result/${testRunId}`, icon: "LayoutDashboard" },
  { name: "Metrics", route: `/test/result/${testRunId}/metrics`, icon: "ChartNoAxesCombined" },
  { name: "Traces", route: `/test/result/${testRunId}/traces`, icon: "ScanSearch" },
];
