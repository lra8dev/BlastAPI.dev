import { Switch } from "@/components/ui/switch";
import { NavigationHandlers } from "../../_types";

export const NotesFilter = ({ hasSearchParam, updateSearchParam }: NavigationHandlers) => {
  return (
    <div title="Filter by Notes" className="h-fit filter-btn filter-btn-hover">
      <Switch
        id="switch"
        checked={hasSearchParam("notes")}
        className="cursor-pointer"
        onCheckedChange={checked => updateSearchParam("notes", checked)}
      />
      <span>Notes</span>
    </div>
  );
};
