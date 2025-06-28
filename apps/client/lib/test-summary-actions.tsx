import { Braces, FileDigit, Trash2 } from "lucide-react";
import { v4 } from "uuid";
import { PrimaryBtn } from "@/components/global/buttons/primary";

const copyId = v4();
const downloadJsonId = v4();
const deleteTestId = v4();

const testSummaryActions = (testRunId: string, itemId: string) => {
  switch (itemId) {
    case copyId:
      navigator.clipboard.writeText(testRunId);
      console.log(`Test ID ${testRunId} copied to clipboard.`);
      // WIP: add a toast notification here to confirm the ID has been copied
      break;
    case downloadJsonId:
      console.log(`Test Run ID: ${testRunId}`);
      // Implement export functionality here
      break;
    case deleteTestId:
      console.log(`Test Run ID: ${testRunId}`);
      // Implement delete functionality here
      break;
    default:
      break;
  }
};

export const TEST_SUMMARY_DI = (testRunId: string) => [
  {
    id: copyId,
    children: (
      <PrimaryBtn
        title="Copy Test ID"
        className="font-normal text-gray-300/90 text-sm group-focus:text-gray-200/81"
      >
        <FileDigit className="size-3 text-gray-300/90 group-focus:text-gray-200/81" />
      </PrimaryBtn>
    ),
    action: (itemId: string) => testSummaryActions(testRunId, itemId),
  },
  {
    id: downloadJsonId,
    children: (
      <PrimaryBtn
        title="Download JSON Report"
        className="font-normal text-gray-300/90 text-sm group-focus:text-gray-200/81"
      >
        <Braces className="size-3 text-gray-300/90 group-focus:text-gray-200/81" />
      </PrimaryBtn>
    ),
    action: (itemId: string) => testSummaryActions(testRunId, itemId),
  },
];

export const TEST_SUMMARY_SPECIAL_DI = (testRunId: string) => [
  {
    id: deleteTestId,
    children: (
      <PrimaryBtn
        title="Delete Test"
        className="font-normal text-red-400/90 text-sm group-focus:text-gray-200/75"
      >
        <Trash2 className="text-red-400/90 size-3 group-focus:text-gray-200/75" />
      </PrimaryBtn>
    ),
    action: (itemId: string) => testSummaryActions(testRunId, itemId),
  },
];
