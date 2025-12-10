import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "flex items-center gap-2 border border-transparent text-[0.8125rem] dark:text-gray-300/80 text-neutral-600 rounded backdrop-blur-md bg-primary shadow-xs dark:shadow-none",
        danger:
          "text-[0.8125rem] rounded border dark:text-red-200 dark:bg-red-900/55 dark:border-red-500/10 dark:hover:bg-red-900/45 text-red-950/70 bg-red-300/80 border-red-400/40 hover:bg-red-300/90 backdrop-blur-md shadow-xs dark:shadow-none",
        outline:
          "text-[0.8125rem] border rounded text-gray-950/70 bg-gray-200/50 border-gray-300/80 hover:bg-gray-200/80 dark:bg-dark-3 dark:border-neutral-700/40 backdrop-blur-md dark:text-neutral-300/80 dark:hover:bg-input/50 shadow-xs dark:shadow-none",
        default:
          "bg-primary text-primary-foreground shadow-xs dark:shadow-none hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs dark:shadow-none hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        text: "text-primary",
      },
      size: {
        default: "h-9 rounded px-4 py-2 has-[>svg]:px-3",
        xs: "h-auto px-2 py-1",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
