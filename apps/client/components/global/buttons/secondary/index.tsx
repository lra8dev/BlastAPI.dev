import { Button } from "@/components/ui/button";

export const SecondaryBtn = ({ children, title, variant, type, size, className }: ButtonProps) => (
  <Button
    className={`flex items-center gap-2 ${className}`}
    type={type}
    variant={variant ? variant : "primary"}
    size={size}
  >
    <h3> {title} </h3> <figure>{children}</figure>
  </Button>
);
