import { Button } from "@/components/ui/button";

export const PrimaryBtn = ({ children, title, variant, type, size, className }: ButtonProps) => (
  <Button
    className={`flex items-center gap-2 rounded ${className}`}
    variant={variant ? variant : "primary"}
    type={type}
    size={size}
  >
    <figure>{children}</figure> <h3>{title}</h3>
  </Button>
);
