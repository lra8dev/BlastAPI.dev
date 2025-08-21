import { Braces, FileDigit, Play, Share, Trash2 } from "lucide-react";
import { v4 } from "uuid";
import { ResultHeaderMoreActions } from "../_types";

export const TEST_SUMMARY_ACTIONS = [
  { id: v4(), name: "Re-run", icon: Play },
  { id: v4(), name: "Share", icon: Share },
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
