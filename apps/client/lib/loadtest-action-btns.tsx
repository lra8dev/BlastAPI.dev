import { Braces, FileDigit, Trash2 } from "lucide-react";
import { v4 } from "uuid";
import { PrimaryBtn } from "@/components/global/buttons/primary";

const copyId = v4();
const downloadJsonId = v4();
const deleteTestId = v4();

// TODO: improve it later
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

export const LOAD_TEST_DROPDOWN_ITEMS = (testRunId: string) => [
  {
    id: copyId,
    children: (
      <PrimaryBtn title="Copy Test ID" className="font-medium text-[0.8125rem] text-gray-300/80">
        <FileDigit className="size-[0.8125rem]" />
      </PrimaryBtn>
    ),
    action: (itemId: string) => testSummaryActions(testRunId, itemId),
  },
  {
    id: downloadJsonId,
    children: (
      <PrimaryBtn
        title="Download JSON Report"
        className="font-medium text-[0.8125rem] text-gray-300/80"
      >
        <Braces className="size-[0.8125rem]" />
      </PrimaryBtn>
    ),
    action: (itemId: string) => testSummaryActions(testRunId, itemId),
  },
  {
    id: deleteTestId,
    children: (
      <PrimaryBtn
        title="Delete Test"
        className="font-medium text-red-400/90 text-[0.8125rem] group-focus:text-red-300"
      >
        <Trash2 className="size-[0.8125rem] group-focus:text-red-300" />
      </PrimaryBtn>
    ),
    action: (itemId: string) => testSummaryActions(testRunId, itemId),
    isSeparator: true,
    isDestructive: true,
  },
];
