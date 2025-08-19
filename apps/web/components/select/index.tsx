import { Fragment } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CustSelectProps } from "@/types";

const DEFAUTL_CLASSNAME =
  "font-inter font-normal text-[.8125rem] text-neutral-500 dark:text-neutral-300/80 dark:bg-dark-3";

const DEFAULT_TRIGGER_CLASS =
  "border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700/50 dark:hover:brightness-105";

const DEFAULT_ITEM_CLASS = "focus:bg-neutral-200 dark:focus:bg-white/10";

export const CustSelect = ({
  value,
  options,
  onChange,
  itemClassName,
  triggerClassName,
  contentClassName,
}: CustSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className={cn(DEFAUTL_CLASSNAME, DEFAULT_TRIGGER_CLASS, triggerClassName)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className={cn(
          DEFAUTL_CLASSNAME,
          "border-neutral-200 dark:border-neutral-700/45",
          contentClassName,
        )}
      >
        {options.map(option => (
          <Fragment key={option.value}>
            {option.isSeparator && <SelectSeparator className="dark:bg-neutral-700/45" />}
            <SelectItem value={option.value} className={cn(DEFAULT_ITEM_CLASS, itemClassName)}>
              {option.label}
            </SelectItem>
          </Fragment>
        ))}
      </SelectContent>
    </Select>
  );
};
