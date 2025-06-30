"use client";

import { CircleCheck, Ellipsis } from "lucide-react";
import { useCallback, useState } from "react";
import { PrimaryBtn } from "@/components/global/buttons/primary";
import { CustDropdownMenu } from "@/components/global/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TEST_SUMMARY_ACTIONS, TEST_SUMMARY_BTNS } from "@/constants";
import { NavTypeBtns } from "@/lib/nav-type-buttons";
import { TEST_SUMMARY_DI, TEST_SUMMARY_SPECIAL_DI } from "@/lib/test-summary-actions";

export const LoadTestHeader = ({ testRunId }: TestRunId) => {
  const [test, setTest] = useState<string>(TEST_SUMMARY_BTNS[0].id);

  const di = useCallback(() => {
    return {
      items: TEST_SUMMARY_DI(testRunId),
      specialItems: TEST_SUMMARY_SPECIAL_DI(testRunId),
    };
  }, [testRunId]);

  return (
    <header className="sticky z-50 top-0 bg-dark-2 border-b border-neutral-700/25">
      <nav className="flex flex-col min-[478px]:flex-row min-[478px]:items-center min-[478px]:justify-between gap-2 w-full px-3 py-2 md:py-3 md:px-4 lg:px-6 drop-shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-neon-green/18 text-neon-green/65 rounded-full p-1 px-2 border border-neon-green/10">
              <CircleCheck className="size-4" />
              {/* WIP: replace with actual no. of reqs */}
              <p className="text-xs font-medium">2/2</p>
            </div>
            {/* WIP: replace with actual test name later */}
            <h3 className="font-semibold text-xs md:text-[0.8125rem] text-gray-300/90">
              ecommerce-flash-sale-example
            </h3>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <NavTypeBtns NAV_TYPES={TEST_SUMMARY_BTNS} test={test} setTest={setTest} />
          </div>
        </div>

        <div className="flex items-center max-[478px]:self-end gap-2">
          {TEST_SUMMARY_ACTIONS.map(action => (
            <PrimaryBtn
              key={action.id}
              title={action.name}
              className="font-semibold text-xs bg-white/8 text-gray-300 border border-neutral-700/40 px-2 py-0.5 sm:p-2 gap-1 hover:bg-white/10 hover:brightness-110 md:gap-2 md:text-[0.8125rem]"
            >
              {/* TODO: add success green tick on share btn after text completes */}
              <action.icon className="size-3 md:size-[0.8125rem]" aria-hidden="true" />
            </PrimaryBtn>
          ))}

          <CustDropdownMenu
            trigger={
              <Button
                size="icon"
                variant="primary"
                className="bg-white/8 text-gray-300/80 border border-neutral-700/40 hover:bg-white/10 hover:brightness-110 rounded"
              >
                <Ellipsis aria-hidden="true" />
              </Button>
            }
            items={di().items}
            specialItems={di().specialItems}
            specialClassName="focus:bg-red-500/50"
          />
        </div>
      </nav>

      <nav className="md:hidden sticky top-0 z-50 border-neutral-700/30 border-t px-3 py-2 md:py-3 md:px-4 lg:px-6 drop-shadow-md">
        <div className="flex items-center gap-2 sm:gap-3">
          <NavTypeBtns NAV_TYPES={TEST_SUMMARY_BTNS} test={test} setTest={setTest} />
        </div>
      </nav>
    </header>
  );
};
