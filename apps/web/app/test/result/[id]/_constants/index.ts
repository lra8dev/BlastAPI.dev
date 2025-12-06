import { Braces, FileDigit, PanelTopOpen, Play, Share, Trash2 } from "lucide-react";
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
