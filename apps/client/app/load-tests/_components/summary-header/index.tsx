"use client";

import clsx from "clsx";
import { CircleCheck, Ellipsis } from "lucide-react";
import { useCallback, useState } from "react";
import { PrimaryBtn } from "@/components/global/buttons/primary";
import { CustDropdownMenu } from "@/components/global/dropdown-menu";
import { TEST_SUMMARY_ACTIONS, TEST_SUMMARY_BTNS } from "@/constants";
import { TEST_SUMMARY_DI, TEST_SUMMARY_SPECIAL_DI } from "@/lib/test-summary-actions";

export const SummaryHeader = ({ testRunId }: TestRunId) => {
  const [test, setTest] = useState<string>(TEST_SUMMARY_BTNS[0].id);
  const di = useCallback(() => {
    return {
      items: TEST_SUMMARY_DI(testRunId),
      specialItems: TEST_SUMMARY_SPECIAL_DI(testRunId),
    };
  }, [testRunId]);

  return (
    <section className="flex items-center justify-between sticky z-50 top-0 bg-dark-2 border-b border-neutral-700/25 px-3 py-2 md:py-3 md:px-4 lg:px-6">
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-neon-green/18 text-neon-green/65 rounded-full p-1 px-2 border border-neon-green/10">
            <CircleCheck className="size-4" />
            {/* WIP: replace with actual no. of reqs */}
            <p className="text-xs font-medium">2/2</p>
          </div>
          {/* WIP: replace with actual test name later */}
          <h3 className="font-medium text-sm text-gray-300/90">ecommerce-flash-sale-example</h3>
        </div>
        <div className="flex items-center gap-2">
          {TEST_SUMMARY_BTNS.map(btn => (
            <PrimaryBtn
              key={btn.id}
              title={btn.name}
              className={clsx(
                "font-medium text-xs text-gray-300/80 px-2 gap-1 md:gap-2 md:text-sm md:px-3",
                {
                  "box-hover-2": test !== btn.id,
                  "bg-white/7 text-gray-300": test === btn.id,
                },
              )}
              onClick={() => setTest(btn.id)}
            >
              <btn.icon className="size-3 md:size-3.5" />
            </PrimaryBtn>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {TEST_SUMMARY_ACTIONS.map(action => (
          <PrimaryBtn
            key={action.id}
            title={action.name}
            className="font-medium text-xs bg-white/8 text-gray-300 border border-neutral-700/40 p-2 gap-1 hover:bg-white/10 hover:brightness-110 md:gap-2 md:text-sm"
          >
            {/* TODO: add success green tick on share btn after text completes */}
            <action.icon className="size-3 md:size-3.5" />
          </PrimaryBtn>
        ))}

        <CustDropdownMenu
          trigger={<Ellipsis size={16} />}
          items={di().items}
          specialItems={di().specialItems}
          triggerClassName="h-full text-gray-300/80 bg-white/8 p-2 border border-neutral-700/40 cursor-pointer hover:bg-white/10 hover:brightness-110 rounded"
          specialClassName="focus:bg-fiery-orange/27"
          // contentClassName=""
        />
      </div>
    </section>
  );
};
