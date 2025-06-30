"use client";

import clsx from "clsx";
import { PrimaryBtn } from "@/components/global/buttons/primary";

export const NavTypeBtns = ({ test, setTest, NAV_TYPES }: NavTypeBtnsProps) => (
  <>
    {NAV_TYPES.map(testType => (
      <PrimaryBtn
        key={testType.id}
        title={testType.name}
        className={clsx(
          "font-semibold text-xs text-gray-300/75 px-2 gap-1 md:gap-2 md:text-[0.8125rem] md:px-3 shadow-none",
          {
            "box-hover-2": test !== testType.id,
            "bg-white/7 text-gray-300": test === testType.id,
          },
        )}
        onClick={() => setTest(testType.id)}
      >
        <testType.icon className="size-3 md:size-[0.8125rem]" aria-hidden="true" />
      </PrimaryBtn>
    ))}
  </>
);
