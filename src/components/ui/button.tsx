import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg text-lg font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-card active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Senior-friendly variants with extra visual feedback
        senior: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-hover active:scale-[0.98] text-xl min-h-[60px] px-8",
        seniorOutline: "border-3 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground text-xl min-h-[60px] px-8",
        seniorSuccess: "bg-success text-success-foreground hover:bg-success/90 shadow-card hover:shadow-hover active:scale-[0.98] text-xl min-h-[60px] px-8",
        seniorWarning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-card hover:shadow-hover active:scale-[0.98] text-xl min-h-[60px] px-8",
        seniorDanger: "bg-danger text-danger-foreground hover:bg-danger/90 shadow-card hover:shadow-hover active:scale-[0.98] text-xl min-h-[60px] px-8",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4 text-base",
        lg: "h-14 rounded-lg px-8 text-xl",
        xl: "h-16 rounded-xl px-10 text-xl",
        icon: "h-12 w-12",
        iconLg: "h-16 w-16",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
