import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CustTooltipProps } from "@/types/general";

export const CustTooltip = ({ content, children, label }: CustTooltipProps) => (
  <Tooltip disableHoverableContent>
    <TooltipTrigger className="cursor-pointer">{children}</TooltipTrigger>
    <TooltipContent sideOffset={8}>
      <p>{label}</p>
      <p className={cn(label && "text-neutral-700 dark:text-neutral-200")}>{content}</p>
    </TooltipContent>
  </Tooltip>
);
