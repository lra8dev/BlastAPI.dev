"use client";

import { Check } from "lucide-react";
import { Fragment, useState } from "react";
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
import { UserMenuAction } from "@/constants";
import { useUserMenuActions } from "@/hooks/user";
import { cn } from "@/lib/utils";

export const CustDropdownMenu = ({
  items,
  trigger,
  itemClassName,
  triggerClassName,
  contentClassName,
}: CustDropdownMenuProps) => {
  const [isChecked, setIsChecked] = useState<Record<string, boolean>>({});
  const { handleAction } = useUserMenuActions();

  // WIP: set checked item at a time
  const handleItemClick = (id: string) => setIsChecked(prev => ({ ...prev, [id]: true }));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={cn("focus-visible:outline-none focus-visible:ring-0", triggerClassName)}
      >
        {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn(
          "w-60 font-inter bg-dark-5 border border-neutral-700/45 rounded",
          contentClassName,
        )}
        align="end"
      >
        {items.map(item => (
          <Fragment key={item.id}>
            {item.isSeparator && <DropdownMenuSeparator className="bg-neutral-700/45" />}

            {item.subItems ? (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger
                  className={cn(
                    "flex group relative justify-between items-center font-medium text-[0.8125rem] p-0 pr-2 focus:bg-white/5 focus:brightness-120",
                    itemClassName,
                  )}
                >
                  {item.children}
                  {item.itemShortcut && (
                    <DropdownMenuShortcut className="absolute right-7 z-50 text-muted-foreground text-right">
                      {item.itemShortcut}
                    </DropdownMenuShortcut>
                  )}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-dark-5 border border-neutral-700/45 rounded">
                  {item.subItems.map(sub => (
                    <DropdownMenuItem
                      key={sub.id}
                      className="group font-medium text-[0.8125rem] p-0 focus:bg-white/5 focus:brightness-120"
                      onClick={() => {
                        handleAction(sub.actionId as UserMenuAction);
                        handleItemClick(sub.id);
                      }}
                    >
                      {sub.children}
                      {sub.itemShortcut && (
                        <DropdownMenuShortcut className="absolute right-7 z-50 text-muted-foreground text-right">
                          {sub.itemShortcut}
                        </DropdownMenuShortcut>
                      )}
                      <Check
                        className={cn(
                          "size-[12px] ml-auto mr-2",
                          isChecked[sub.id] ? "block" : "hidden",
                        )}
                      />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem
                className={cn(
                  "flex group justify-between items-center p-0 focus:bg-white/5 focus:brightness-120",
                  item.isDestructive && "focus:bg-red-500/50",
                  itemClassName,
                )}
                onClick={() => item.actionId && handleAction(item.actionId as UserMenuAction)}
              >
                {item.children}
                {item.itemShortcut && (
                  <DropdownMenuShortcut className="font-medium text-[0.8125rem] text-muted-foreground text-right">
                    {item.itemShortcut}
                  </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
