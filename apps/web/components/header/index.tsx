"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserOrg } from "@/components/user-org";
import { LAYOUT_HEADER_TABS, USER_DROPDOWN_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { LayoutHeaderProps } from "@/types/general";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { UserAvatar } from "../avatar";
import { CustDropdownMenu } from "../dropdown-menu";
import { NavTabItems } from "../nav-tab-items";

export const Header = ({ user, className }: LayoutHeaderProps) => {
  return (
    <header
      className={cn(
        "w-full font-inter bg-white dark:bg-dark-5 border-b dark:border-neutral-700/25 shadow-xs",
        className,
      )}
    >
      <nav className="flex items-center justify-between w-full flex-wrap overflow-hidden px-3 py-3 md:px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Link href="/dashboard">
              <Image
                src="/assets/BlastAPI_logo.svg"
                alt="BlastAPI Logo"
                width={105}
                height={105}
                className="max-[421px]:hidden"
              />
              <Image
                src="/assets/BlastAPI_logo_single.svg"
                alt="BlastAPI Logo"
                width={19}
                height={19}
                className="min-[421px]:hidden"
              />
            </Link>

            <UserOrg name={user.name ?? user.email} userId={user.id} />
          </div>

          <NavTabItems tabItems={LAYOUT_HEADER_TABS} className="max-md:hidden" />
        </div>

        <CustDropdownMenu
          trigger={
            <Button variant="primary" size="icon" className="rounded-full bg-transparent">
              <UserAvatar
                url={user.image ?? undefined}
                fallbackChar={generateFallbackChars(user.name ?? user.email)}
              />
            </Button>
          }
          menuItems={USER_DROPDOWN_ITEMS}
        />
      </nav>
      <nav className="md:hidden">
        <NavTabItems tabItems={LAYOUT_HEADER_TABS} className="overflow-hidden flex-wrap flex-1" />
      </nav>
    </header>
  );
};
