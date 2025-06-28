import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SecondaryBtn = ({ children, title, variant, className, ...props }: ButtonProps) => (
  <Button
    aria-label={title}
    {...props}
    variant={variant ? variant : "primary"}
    className={cn("flex items-center gap-2 rounded", className)}
  >
    {title} <span> {children}</span>
  </Button>
);
