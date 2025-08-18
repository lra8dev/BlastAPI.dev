import { ChevronDown, Folders, Plus } from "lucide-react";
import Link from "next/link";
import { CustPopover } from "@/components/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FilteringData } from "../../_types";
import { primaryFilterConfig } from "../../_utils";
import { DateFilter } from "../filter-by-date";
import { NotesFilter } from "../filter-by-notes";
import { PrimaryFilters } from "../primary-filters";

interface DashboardHeaderProps {
  tests: FilteringData[];
}

export const DashboardHeader = ({ tests }: DashboardHeaderProps) => {
  const options = primaryFilterConfig(tests);

  return (
    <header className="sticky z-50 top-0 border-y bg-white dark:bg-dark-2 dark:border-neutral-700/30 shadow-xs p-3 md:px-4 lg:px-6">
      <nav className="flex w-full items-center justify-between">
        <div className="flex gap-2 items-center">
          <CustPopover
            trigger={
              <Button
                size="xs"
                variant="primary"
                className="group/chevron text-xs shadow-none bg-neutral-100 border-neutral-200 text-neutral-600/80 dark:bg-dark-3 dark:border-neutral-700/30 hover:bg-neutral-200/60 dark:hover:brightness-110"
              >
                <Folders className="size-3.5" />
                Views
                <ChevronDown className="size-3.5 group-focus/chevron:rotate-180 transition-transform" />
              </Button>
            }
            align="start"
            cardClassName="px-4 py-1.5 gap-2 items-center justify-center text-center text-balance"
          >
            <Folders className="size-7 p-1 border rounded-full text-neutral-600 dark:text-neutral-300/80" />
            <p className="text-neutral-600 dark:text-neutral-300/80">
              You currently have no saved views. Start by filtering and clicking save.
            </p>
          </CustPopover>
          <div className="hidden sm:block h-6 opacity-50">
            <Separator orientation="vertical" />
          </div>
          <div className="hidden sm:flex gap-2 items-center">
            <PrimaryFilters options={options} />
            <DateFilter />
            <NotesFilter />
          </div>
        </div>
        <Link href="/newtest">
          <Button
            size="xs"
            variant="primary"
            title="Create New Test"
            className="font-semibold text-xs bg-neutral-100 dark:bg-dark-3 shadow-none dark:text-gray-200 dark:border-neutral-700/30 dark:hover:brightness-110 border-neutral-200 hover:bg-neutral-200/60"
          >
            <Plus className="size-3.5" />
            New Test
          </Button>
        </Link>
      </nav>
      <nav className="sm:hidden flex gap-2 w-full items-center overflow-hidden flex-wrap flex-1 pt-2">
        <PrimaryFilters options={options} />
        <DateFilter />
        <NotesFilter />
      </nav>
    </header>
  );
};
