import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PrimaryBtn = ({ title, variant, children, className, ...props }: ButtonProps) => (
  <Button
    aria-label={title}
    variant={variant ? variant : "primary"}
    className={cn("flex items-center gap-2 rounded", className)}
    {...props}
  >
    <figure>{children}</figure>
    {title}
  </Button>
);
