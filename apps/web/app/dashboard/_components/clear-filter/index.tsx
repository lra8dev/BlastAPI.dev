import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClearFilterProps } from "../../_types";

export const ClearFilter = ({ ...rest }: ClearFilterProps) => (
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
