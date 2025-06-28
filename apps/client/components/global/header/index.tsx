"use client";

import clsx from "clsx";
import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TEST_TYPES } from "@/constants";
import { cn } from "@/lib/utils";
import { PrimaryBtn } from "../buttons/primary";

const TestTypeNav = ({ test, setTest }: TestTypeNavProps) => (
  <>
    {TEST_TYPES.map(testType => (
      <PrimaryBtn
        key={testType.id}
        title={testType.name}
        className={clsx(
          "font-medium text-xs text-gray-300/80 px-2 gap-1 md:gap-2 md:text-sm md:px-3",
          {
            "box-hover-2": test !== testType.id,
            "bg-white/7 text-gray-300": test === testType.id,
          },
        )}
        onClick={() => setTest(testType.id)}
      >
        <testType.icon className="size-3 md:size-3.5" />
      </PrimaryBtn>
    ))}
  </>
);

export const Header = ({ className }: { className?: string }) => {
  const [test, setTest] = useState<string>(TEST_TYPES[0].id);

  return (
    <header className={cn("w-full font-inter bg-dark-5 border-b border-neutral-700/25", className)}>
      <nav className="flex items-center justify-between w-full px-3 py-2 md:py-3 md:px-4 lg:px-6 drop-shadow-md">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Link href="/">
              <figure>
                <Image
                  src="/icons/API Overload Logo.svg"
                  alt="API Overload Logo"
                  width={50}
                  height={50}
                />
              </figure>
            </Link>
            {/* WIP: Implement user org component */}
            <div>USER ORG</div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <TestTypeNav test={test} setTest={setTest} />
          </div>
        </div>
        <figure>
          {/* WIP: add theme toggle button in user profile section */}
          <UserCircle2 />
        </figure>
      </nav>
      {/* FIXME: Nav is not being sticky on mobile devices */}
      <nav className="md:hidden sticky top-0 z-40 flex gap-2 sm:gap-3 border-neutral-700/30 border-t px-3 py-2 md:py-3 md:px-4 lg:px-6 drop-shadow-md">
        <TestTypeNav test={test} setTest={setTest} />
      </nav>
    </header>
  );
};
