"use client";

import clsx from "clsx";
import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TEST_TYPES } from "@/constants";
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

export const Header = () => {
  const [test, setTest] = useState<string>(TEST_TYPES[0].id);

  return (
    <header className="w-full font-inter md:sticky top-0 z-50 bg-dark-gray-2 md:border-b border-neutral-800">
      <nav className="flex items-center justify-between w-full px-2 md:px-4 py-2 drop-shadow-md">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Link href="/">
              <figure>
                <Image
                  src="/icons/API Overload Logo.svg"
                  alt="API Overload Logo"
                  width={60}
                  height={60}
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
          <UserCircle2 />
        </figure>
      </nav>
      {/* FIXME: Nav is not being sticky on mobile devices */}
      <nav className="md:hidden sticky top-0 z-40 flex gap-2 sm:gap-3 border-neutral-800 border-t px-2 sm:px-4 py-3 drop-shadow-md">
        <TestTypeNav test={test} setTest={setTest} />
      </nav>
    </header>
  );
};
