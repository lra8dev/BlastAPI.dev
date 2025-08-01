import { Link2, StickyNote } from "lucide-react";
import { Badge } from "@/components/badge";
import { TestBadge } from "../../_types";

export const TestHistoryBadge = ({ notes, shared }: TestBadge) => {
  if (!notes?.length && !shared) {
    return null;
  }

  return (
    <>
      {notes?.length && (
        <Badge key="notes" className="flex items-center gap-1 dark:bg-dark-3/60">
          <StickyNote className="size-3 rotate-90" />
          {notes.length} note{notes.length > 1 ? "s" : ""}
        </Badge>
      )}
      {shared && (
        <Badge key="shared" className="flex items-center gap-1 flex-nowrap">
          <Link2 className="size-3 -rotate-45" />
          Shared
        </Badge>
      )}
    </>
  );
};
