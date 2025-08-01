import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CustPopover } from "@/components/popover";
import { Separator } from "@/components/ui/separator";
import { TestHistories } from "../../_types";
import { ChevronDown, Folders } from "lucide-react";
import { FilterActions } from "../filter-button";

export const DashboardHeader = ({ data }: TestHistories) => (
  <header className="sticky z-50 top-0 bg-white dark:bg-dark-2 border-y dark:border-neutral-700/30 shadow-xs">
    <nav className="flex w-full items-center justify-between px-3 py-2 md:py-2.5 md:px-4 lg:px-6">
      <div className="flex gap-2 items-center">
        <CustPopover
          trigger={
            <Button
              size="xs"
              variant="primary"
              className="group/chevron shadow-none bg-neutral-100 border-neutral-200 text-neutral-600 dark:bg-dark-3 dark:text-gray-200 dark:border-neutral-700/30 hover:bg-neutral-200/60 dark:hover:brightness-110"
            >
              <Folders className="size-3.5" />
              Views
              <ChevronDown className="size-3.5 group-focus/chevron:rotate-180" />
            </Button>
          }
          align="start"
          cardClassName="px-4 py-1.5 gap-2 justify-center items-center"
        >
          <Folders className="size-7 p-1 border rounded-full text-neutral-600 dark:text-neutral-300/80" />
          <p className="text-neutral-600 dark:text-neutral-300/80">
            You currently have no saved views. Start by filtering and clicking save.
          </p>
        </CustPopover>
        <div className="hidden sm:block h-6.5 opacity-50">
          <Separator orientation="vertical" />
        </div>
        <div className="hidden sm:flex gap-2 items-center">
          <FilterActions data={data} />
        </div>
      </div>
      <Link href="/newtest">
        <Button
          size="xs"
          variant="primary"
          title="Create New Test"
          className="font-semibold bg-neutral-100 dark:bg-dark-3 shadow-none dark:text-gray-200 dark:border-neutral-700/30 dark:hover:brightness-110 text-neutral-600 border-neutral-200 hover:bg-neutral-200/60"
        >
          <Plus />
          New Test
        </Button>
      </Link>
    </nav>
    <nav className="sm:hidden flex gap-2 w-full items-center overflow-hidden flex-wrap flex-1 px-3 py-2 md:py-2.5 md:px-4 lg:px-6">
      <FilterActions data={data} />
    </nav>
  </header>
);
