"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Fragment, useCallback, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DynamicIcon } from "@/lib/dynamic-icons";
import { cn } from "@/lib/utils";
import { CustDropdownMenuProps } from "@/types";

export const CustDropdownMenu = ({ trigger, menuItems }: CustDropdownMenuProps) => {
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  const [selectedMap, setSelectedMap] = useState<Record<string, string>>({
    "time-zone-menu-item": "Local time",
    "theme-menu-item": theme ?? "System",
  });

  const handleSelect = useCallback(
    (itemId: string, subItem?: { id: string; value: string }) => {
      setSelectedMap(prev => ({
        ...prev,
        [itemId]: subItem?.value ?? "",
      }));

      switch (itemId) {
        case "edit-profile-menu-item":
          router.push("/dashboard/settings/user");
          break;

        case "sign-out-menu-item":
          signOut();
          break;

        case "theme-menu-item":
          if (subItem && subItem.value.toLowerCase() !== theme) {
            setTheme(subItem.value.toLowerCase());
          }
          break;

        default:
          break;
      }
    },
    [setSelectedMap, router, setTheme, theme],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={cn(
          "w-60 font-inter font-medium text-neutral-500 dark:text-neutral-400 dark:bg-dark-5 dark:border-neutral-700/45",
        )}
      >
        {menuItems.map(item => (
          <Fragment key={item.id}>
            {item.isSeparator && <DropdownMenuSeparator className="dark:bg-neutral-700/45" />}

            {item.submenu ? (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger
                  className={cn(
                    "flex w-full justify-between items-center cursor-pointer text-[0.8125rem]",
                  )}
                >
                  <div className="flex items-center gap-2">
                    {item?.icon && <DynamicIcon name={item.icon} className="size-3.5" />}
                    <span>{item.label}</span>
                  </div>
                  {selectedMap[item.id] && (
                    <DropdownMenuShortcut className="opacity-70">
                      {selectedMap[item.id]}
                    </DropdownMenuShortcut>
                  )}
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent className="text-neutral-500 dark:text-neutral-400 dark:bg-dark-5 dark:border-neutral-700/45">
                  {item.submenu.map(sub => {
                    const isSelected =
                      item.id === "theme-menu-item"
                        ? sub.label.toLowerCase() === theme
                        : selectedMap[item.id] === sub.label;

                    return (
                      <DropdownMenuItem
                        key={sub.id}
                        onSelect={() => handleSelect(item.id, { id: sub.id, value: sub.label })}
                        className="flex items-center gap-2 cursor-pointer text-[0.8125rem]"
                      >
                        {sub?.icon && <DynamicIcon name={sub.icon} className="size-3.5" />}
                        {sub.label}
                        {isSelected && <Check className="size-3.5 ml-auto" />}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem
                onSelect={() => handleSelect(item.id)}
                className="flex items-center gap-2 cursor-pointer text-[0.8125rem]"
              >
                {item?.icon && <DynamicIcon name={item.icon} className="size-3.5" />}
                {item.label}
              </DropdownMenuItem>
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
