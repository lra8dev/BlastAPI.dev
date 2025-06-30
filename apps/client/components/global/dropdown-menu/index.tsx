import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const CustDropdownMenu = ({
  items,
  trigger,
  specialItems,
  itemClassName,
  triggerClassName,
  contentClassName,
  specialClassName,
}: CustDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={cn("focus-visible:outline-none focus-visible:ring-0", triggerClassName)}
      >
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "w-56 font-inter bg-dark-2 border border-neutral-700/45 rounded",
          contentClassName,
        )}
        align="end"
      >
        {items.map(({ id, children, action }) => (
          <DropdownMenuItem
            key={id}
            className={cn("group p-0 focus:bg-white/7", itemClassName)}
            onClick={() => action(id)}
          >
            {children}
          </DropdownMenuItem>
        ))}

        {specialItems && (
          <>
            <DropdownMenuSeparator className="bg-neutral-700/45" />
            {specialItems.map(({ id, children, action }) => (
              <DropdownMenuItem
                key={id}
                className={cn("group p-0", specialClassName)}
                onClick={() => action(id)}
              >
                {children}
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
