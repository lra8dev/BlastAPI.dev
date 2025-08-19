import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserOrg } from "@/components/user-org";
import { LAYOUT_HEADER_TABS, USER_DROPDOWN_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { LayoutHeaderProps } from "@/types";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { UserAvatar } from "../avatar";
import { CustDropdownMenu } from "../dropdown-menu";
import { NavTabItems } from "../nav-tab-items";

export const Header = ({ user, className }: LayoutHeaderProps) => {
  const fallbackChar = generateFallbackChars(user.name ?? user.email);

  return (
    <header
      className={cn(
        "w-full font-inter dark:bg-dark-5 border-b dark:border-neutral-700/25 shadow-xs p-3 md:px-4 lg:px-6",
        className,
      )}
    >
      <nav className="flex items-center justify-between w-full flex-wrap overflow-hidden max-md:pb-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Link href="/dashboard">
              <Image
                src="/assets/BlastAPI_logo.svg"
                alt="BlastAPI Logo"
                width={105}
                height={105}
                className="max-[421px]:hidden"
                priority
              />
              <Image
                src="/assets/BlastAPI_logo_single.svg"
                alt="BlastAPI Logo"
                width={19}
                height={19}
                className="min-[421px]:hidden"
                priority
              />
            </Link>

            <UserOrg name={user.name ?? user.email} userId={user.id} />
          </div>

          <NavTabItems tabItems={LAYOUT_HEADER_TABS} className="max-md:hidden" />
        </div>

        <CustDropdownMenu
          trigger={
            <Button variant="primary" className="rounded-full bg-transparent size-8">
              <UserAvatar url={user.image ?? undefined} fallbackChar={fallbackChar} />
            </Button>
          }
          menuItems={USER_DROPDOWN_ITEMS}
        />
      </nav>
      <nav className="md:hidden border-t pt-2 dark:border-neutral-700/32">
        <NavTabItems tabItems={LAYOUT_HEADER_TABS} className="overflow-hidden flex-wrap flex-1" />
      </nav>
    </header>
  );
};
