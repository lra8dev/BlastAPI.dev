"use client";

import { Check } from "lucide-react";
import { UserAvatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { CustPopover } from "@/components/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DynamicIcon } from "@/lib/dynamic-icons";
import { cn } from "@/lib/utils";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { useNavigation } from "../../_hooks";
import { PrimaryFilterConfig } from "../../_types";
import { ClearFilter } from "../clear-filter";

interface PrimaryFilterProps {
  options: PrimaryFilterConfig[];
}

export const PrimaryFilters = ({ options }: PrimaryFilterProps) => {
  const { hasSearchParam, updateSearchParam } = useNavigation();

  const filters = options.map(filter => (
    <CustPopover
      key={filter.label}
      trigger={
        <Button
          size="xs"
          variant="text"
          title={`Filter by ${filter.label}`}
          className="filter-btn filter-btn-hover"
        >
          <DynamicIcon name={filter.icon} className="size-3.5" />
          {filter.label}
          {hasSearchParam(filter.key) && <Badge className="text-[10px] rounded-full px-1">1</Badge>}
        </Button>
      }
    >
      {!filter.options || !filter.options.length ? (
        <p className="px-4 py-1 text-muted-foreground">Currently {filter.label} is not available</p>
      ) : (
        filter.options.map((option, ind) => (
          <span
            key={ind}
            onClick={() => {
              if (hasSearchParam(filter.key, option.name)) {
                updateSearchParam(filter.key, false);
              } else {
                updateSearchParam(filter.key, option.name);
              }
            }}
            className={cn(
              "flex items-center gap-2 px-2 py-1 text-neutral-500 hover:bg-neutral-200/50 dark:text-gray-300/70 dark:hover:bg-neutral-200/7 dark:hover:text-gray-300 dark:hover:brightness-110 cursor-pointer rounded",
              hasSearchParam(filter.key, option.name) &&
                "bg-neutral-200/50 dark:bg-neutral-200/7 text-neutral-600 dark:text-gray-300",
            )}
          >
            {option.icon && (
              <DynamicIcon
                name={option.icon}
                className={cn("size-3.5 opacity-80", option.iconCN)}
              />
            )}
            {option.user && (
              <UserAvatar
                url={option.user.url}
                className="size-5.5"
                fallbackChar={generateFallbackChars(option.user.email)}
              />
            )}
            {option.children}
            {option.name}
            {hasSearchParam(filter.key, option.name) && <Check className="ml-auto size-3" />}
          </span>
        ))
      )}

      {hasSearchParam(filter.key) && (
        <>
          <Separator /> <ClearFilter onClick={() => updateSearchParam(filter.key, false)} />
        </>
      )}
    </CustPopover>
  ));

  return filters;
};
