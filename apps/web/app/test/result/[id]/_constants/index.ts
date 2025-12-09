import { Braces, FileDigit, PanelTopOpen, Play, Share, Trash2 } from "lucide-react";
import { ChartConfig } from "@/components/ui/chart";
import { ResultHeaderMoreActions } from "../_types";

export const TEST_SUMMARY_ACTIONS = [
  { id: "Re-run", name: "Re-run", icon: Play },
  { id: "Share", name: "Share", icon: Share },
  { id: "Logs", name: "Logs", icon: PanelTopOpen },
];

export const RESULT_HEADER_MORE_ACTIONS: ResultHeaderMoreActions[] = [
  {
    name: "Copy Test ID",
    icon: FileDigit,
  },
  {
    name: "Download JSON Report",
    icon: Braces,
  },
  {
    name: "Delete Test",
    icon: Trash2,
    isSeparator: true,
  },
];

export const lineChartConfig = {
  http_request_rate: {
    label: "http.request_rate",
    color: "var(--chart-3)",
  },
  vus_created: {
    label: "vus.created",
    color: "var(--chart-4)",
  },
  vus_active: {
    label: "vus.active",
    color: "var(--chart-2)",
  },
  http_response_time_p95: {
    label: "http.response_time_p95",
    color: "#5471c9",
  },
  http_response_time_p99: {
    label: "http.response_time_p99",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export const barChartConfig = {
  min: { color: "#BFDBFE" },
  mean: { color: "#93C5FD" },
  p50: { color: "#60A5FA" },
  p95: { color: "#3B82F6" },
  p99: { color: "#1d4ed8" },
  max: { color: "#1E3A8A" },
} satisfies ChartConfig;
