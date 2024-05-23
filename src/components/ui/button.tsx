import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        "secondary-brand":
          "bg-brand/5 text-brand-600 shadow-sm hover:bg-brand/10 hover:text-brand-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        getApp:
          " text- border-0 bg-primary-700 hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-gray-300 text-background",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-10 px-8",
        icon: "size-9",
        none: "w-full hover:cursor-pointer",
        unset: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  buttonTitle?: string | React.ReactNode;
}

export const LoadingButton = React.forwardRef<
  HTMLButtonElement,
  LoadingButtonProps
>(({ isLoading = false, buttonTitle, children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      {isLoading ? (
        <Loader2Icon size={16} className="mr-2 animate-spin" />
      ) : null}
      {buttonTitle && buttonTitle}
      {children}
    </Button>
  );
});

LoadingButton.displayName = "LoadingButton";

export { Button, buttonVariants };
