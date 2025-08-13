import { PopoverClose } from "@radix-ui/react-popover";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CustPopoverProps } from "@/types";
import { Card } from "../ui/card";

export const CustPopover = ({
  align,
  trigger,
  children,
  cardClassName,
  triggerClassName,
  contentClassName,
}: CustPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild className={cn("font-medium text-[0.8125rem]", triggerClassName)}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-fit max-w-[18rem] dark:bg-dark-5 border dark:border-neutral-700/45 px-1 py-1 rounded",
          contentClassName,
        )}
        align={align}
      >
        <PopoverClose>
          <Card
            className={cn(
              "font-inter font-medium text-[.8125rem] gap-0.5 text-neutral-600 dark:text-gray-300/80  p-0 m-0 rounded-none border-none bg-transparent dark:bg-transparent shadow-none",
              cardClassName,
            )}
          >
            {children}
          </Card>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
