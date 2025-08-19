"use client";

import { Switch } from "@/components/ui/switch";
import { useNavigation } from "../../_hooks";

export const NotesFilter = () => {
  const { hasSearchParam, updateSearchParam } = useNavigation();

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
