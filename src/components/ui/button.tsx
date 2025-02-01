import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-light dark:focus-visible:ring-border-dark disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow hover:bg-primary-light dark:hover:bg-primary-dark",
        destructive:
          "bg-error text-white shadow-sm hover:bg-error-light dark:hover:bg-error-dark",
        outline:
          "border border-border-light bg-white shadow-sm hover:bg-gray-100 dark:border-border-dark dark:bg-card-dark dark:hover:bg-gray-800",
        secondary:
          "bg-secondary text-white shadow-sm hover:bg-secondary-light dark:hover:bg-secondary-dark",
        ghost:
          "hover:bg-gray-100 hover:text-text-light dark:hover:bg-gray-800 dark:hover:text-text-dark",
        link: "text-primary underline-offset-4 hover:underline dark:text-primary-light",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
