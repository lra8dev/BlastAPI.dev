import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CustTooltipProps } from "@/types";

export const CustTooltip = ({
  content,
  children,
  className,
  label,
  align,
  side,
}: CustTooltipProps) => (
  <Tooltip disableHoverableContent>
    <TooltipTrigger className="cursor-auto">{children}</TooltipTrigger>
    <TooltipContent sideOffset={8} align={align} side={side} className={className as string}>
      {label && <span className="text-neutral-600/90 dark:text-neutral-300/85">{label}</span>}
      <p>{content}</p>
    </TooltipContent>
  </Tooltip>
);
