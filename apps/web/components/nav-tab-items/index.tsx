"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicIcon } from "@/lib/dynamic-icons";
import { cn } from "@/lib/utils";
import { NavTabProps } from "@/types";

export const NavTabItems = ({ tabItems, className }: NavTabProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        "flex items-center gap-2 font-medium text-xs text-neutral-500 dark:text-neutral-300/70 md:text-[0.8125rem]",
        className,
      )}
    >
      {tabItems.map(item => (
        <Link key={`Tab-Item-${item.name}`} href={item.route}>
          <li
            className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded", "box-hover-2", {
              "text-neutral-600 bg-neutral-200 dark:text-neutral-200 dark:bg-neutral-200/9":
                pathname.startsWith(item.route) || item.route === "/dashboard",
            })}
          >
            <DynamicIcon name={item.icon} className="size-3 md:size-3.25" aria-hidden="true" />
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
