"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { UserAvatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { TEST_TYPES } from "@/constants";
import { NavTypeBtns } from "@/lib/nav-type-buttons";
import { USER_PROFILE_ITEMS } from "@/lib/user-profile-items";
import { cn } from "@/lib/utils";
import { CustDropdownMenu } from "../dropdown-menu";

export const Header = ({ className }: { className?: string }) => {
  const [test, setTest] = useState<string>(TEST_TYPES[0].id);
  const items = useMemo(() => USER_PROFILE_ITEMS, []);

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
            <div className="text-[0.8125rem]">USER ORG</div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <NavTypeBtns NAV_TYPES={TEST_TYPES} test={test} setTest={setTest} />
          </div>
        </div>

        {/* WIP: add theme toggle button in user profile section */}
        <div>
          <CustDropdownMenu
            trigger={
              <Button variant="primary">
                {/* WIP: provide actual user data */}
                <UserAvatar
                  url="https://github.com/shadcn.png"
                  alt="user-name"
                  fallbackChar="LC"
                  className="size-6.5"
                />
              </Button>
            }
            items={items}
          />
        </div>
      </nav>
      <nav className="md:hidden sticky top-0 z-50 flex gap-1 min-[329px]:gap-2 sm:gap-3 border-neutral-700/30 border-t px-1 min-[329px]:px-3 py-2 md:py-3 md:px-4 lg:px-6 drop-shadow-md">
        <NavTypeBtns NAV_TYPES={TEST_TYPES} test={test} setTest={setTest} />
      </nav>
    </header>
  );
};
