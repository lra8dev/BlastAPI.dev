import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/badge";
import { CustPopover } from "@/components/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { formatDateTime } from "@/utils/format-datetime";
import { NavigationHandlers } from "../../_types";
import { ClearFilter } from "../clear-filter";

export const DateFilter = ({ hasSearchParam, updateSearchParam }: NavigationHandlers) => {
  return (
    <CustPopover
      trigger={
        <Button
          size="xs"
          variant="text"
          title="Filter by Date"
          className="filter-btn filter-btn-hover"
        >
          <CalendarDays className="size-3.5" />
          Date
          {hasSearchParam("created") && <Badge className="text-[10px] rounded-full px-1">1</Badge>}
        </Button>
      }
    >
      <Calendar
        mode="single"
        onSelect={date => updateSearchParam("created", formatDateTime(date ?? 0))}
      />

      {hasSearchParam("created") && (
        <ClearFilter onClick={() => updateSearchParam("created", false)} />
      )}
    </CustPopover>
  );
};
