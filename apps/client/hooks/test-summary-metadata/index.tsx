"use client";

import { useCallback } from "react";
import { Card } from "@/components/global/card";
import { getMetadataItems } from "@/lib/test-summary-metadata-items";

// TODO: import TestResult type from types package
type TestResult = {
  id: string;
  createdAt: string;
  duration: string;
  region: string;
  resources: string;
  userEmail: string;
};

interface TestSummaryMetadataProps {
  testResult: TestResult;
}

export const TestSummaryMetadata = ({ testResult }: TestSummaryMetadataProps) => {
  const metadataItems = useCallback(() => getMetadataItems(testResult), [testResult]);

  return (
    <Card className="w-full gap-0 p-0 md:w-80">
      <header className="px-5 py-3.5 border-b border-neutral-700/30">
        <h3 className="font-medium text-[0.8125rem] text-gray-300/75">Metadata</h3>
      </header>
      <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-2 px-5 py-4 font-medium text-zinc-300/78 overflow-hidden">
        {metadataItems().map(item => (
          <div
            key={item.label}
            aria-label={item.label}
            className="flex items-center gap-2 text-[0.8125rem] min-w-0"
          >
            <item.icon size={16} aria-hidden="true" />
            <span className="truncate">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
