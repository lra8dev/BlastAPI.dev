import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PrimaryBtn = ({ children, title, variant, className, ...props }: ButtonProps) => (
  <Button
    aria-label={title}
    variant={variant ? variant : "primary"}
    className={cn("flex items-center gap-2 rounded", className)}
    {...props}
  >
    <span> {children}</span> <span>{title}</span>
  </Button>
);
