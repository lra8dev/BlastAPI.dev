"use client";

import React, { useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TestHistories } from "../../_types";
import { Switch } from "@/components/ui/switch";
import { CustPopover } from "@/components/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/badge";
import { CalendarDays, Check, X } from "lucide-react";
import { UserAvatar } from "@/components/avatar";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { filterActionsConfig } from "../../_utils";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { formatDateTime } from "@/utils/format-datetime";

interface ClearFilterProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ClearFilter = ({ ...rest }: ClearFilterProps) => (
  <Button
    size="xs"
    variant="primary"
    className="justify-start bg-transparent text-neutral-500 hover:bg-neutral-200/50 dark:text-gray-300/70 dark:hover:bg-neutral-200/7 dark:hover:text-gray-300 dark:hover:brightness-110"
    {...rest}
  >
    <X className="size-3.5" />
    Clear
  </Button>
);

interface FilterParamHandlers {
  hasSearchParam: (name: string, value?: string) => boolean;
  updateSearchParam: (key: string, value?: string | boolean) => void;
}

interface CreatedAtFilterProps extends FilterParamHandlers {}
interface FilterSwitchButtonProps extends FilterParamHandlers {}

const CreatedAtFilter = React.memo(
  ({ hasSearchParam, updateSearchParam }: CreatedAtFilterProps) => {
    return (
      <CustPopover
        trigger={
          <Button
            size="xs"
            variant="primary"
            title="Filter by Date"
            className="filter-btn filter-btn-hover"
          >
            <CalendarDays className="size-3.5" />
            Date
            {hasSearchParam("created") && (
              <Badge className="text-[10px] rounded-full px-1">1</Badge>
            )}
          </Button>
        }
      >
        <Calendar
          mode="single"
          onDayClick={date => {
            updateSearchParam("created", formatDateTime(date));
          }}
        />

        {hasSearchParam("created") && (
          <ClearFilter onClick={() => updateSearchParam("created", false)} />
        )}
      </CustPopover>
    );
  },
);

CreatedAtFilter.displayName = "CreatedAtFilter";

const FilterSwitchButton = React.memo(
  ({ hasSearchParam, updateSearchParam }: FilterSwitchButtonProps) => {
    return (
      <Button
        size="xs"
        variant="primary"
        title="Filter by Notes"
        className="h-fit filter-btn filter-btn-hover"
      >
        <Switch
          id="switch"
          checked={hasSearchParam("notes")}
          className="cursor-pointer"
          onCheckedChange={checked => updateSearchParam("notes", checked)}
        />
        <span>Notes</span>
      </Button>
    );
  },
);

FilterSwitchButton.displayName = "FilterSwitchButton";

export const FilterActions = ({ data }: TestHistories) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateSearchParam = useCallback(
    (key: string, value?: string | boolean) => {
      const params = new URLSearchParams(searchParams);

      if (value === undefined || value === false) {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace],
  );

  const hasSearchParam = useCallback(
    (name: string, value?: string) => {
      return value ? searchParams.has(name, value) : searchParams.has(name);
    },
    [searchParams],
  );

  const createFilterOptions = useCallback(() => {
    const testOptions = data.map(test => ({ name: test.testConfig.name }));

    const userOptions = data.map(({ user }) => ({
      name: user.name ?? user.email,
      children: (
        <UserAvatar
          url={user.image ?? undefined}
          className="size-5.5"
          fallbackChar={generateFallbackChars(user.name ?? user.email)}
        />
      ),
    }));

    return filterActionsConfig({
      tests: testOptions,
      users: userOptions,
    });
  }, [data]);

  const filterPopoverButtons = useMemo(() => {
    const filterOptions = createFilterOptions();

    return filterOptions.map(filter => (
      <CustPopover
        key={filter.label}
        trigger={
          <Button
            size="xs"
            variant="primary"
            title={`Filter by ${filter.label}`}
            className="filter-btn filter-btn-hover"
          >
            <filter.icon className="size-3.5" />
            {filter.label}
            {hasSearchParam(filter.key) && (
              <Badge className="text-[10px] rounded-full px-1">1</Badge>
            )}
          </Button>
        }
      >
        {filter.options?.map(option => (
          <Button
            key={option.name}
            size="xs"
            variant="primary"
            onClick={() => {
              hasSearchParam(filter.key, option.name)
                ? updateSearchParam(filter.key, false)
                : updateSearchParam(filter.key, option.name);
            }}
            className={cn(
              "justify-start bg-transparent text-neutral-500 hover:bg-neutral-200/50 dark:text-gray-300/70 dark:hover:bg-neutral-200/7 dark:hover:text-gray-300 dark:hover:brightness-110",
              hasSearchParam(filter.key, option.name) &&
                "bg-neutral-200/50 dark:bg-neutral-200/7 text-neutral-500 dark:text-gray-300",
            )}
          >
            {option.icon && <option.icon className={cn("size-3.5 opacity-80", option.iconCN)} />}
            {option.children}
            {option.name}
            {hasSearchParam(filter.key, option.name) && <Check className="ml-auto size-3" />}
          </Button>
        ))}

        {hasSearchParam(filter.key) && (
          <>
            <Separator /> <ClearFilter onClick={() => updateSearchParam(filter.key, false)} />
          </>
        )}
      </CustPopover>
    ));
  }, [createFilterOptions, hasSearchParam, updateSearchParam]);

  return (
    <>
      {filterPopoverButtons}
      <CreatedAtFilter hasSearchParam={hasSearchParam} updateSearchParam={updateSearchParam} />
      <FilterSwitchButton hasSearchParam={hasSearchParam} updateSearchParam={updateSearchParam} />
    </>
  );
};
