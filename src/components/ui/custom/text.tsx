import {
  createElement,
  forwardRef,
  memo,
  type ComponentPropsWithoutRef,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

// leading-3	line-height: .75rem; /* 12px */
// leading-4	line-height: 1rem; /* 16px */
// leading-5	line-height: 1.25rem; /* 20px */
// leading-6	line-height: 1.5rem; /* 24px */
// leading-7	line-height: 1.75rem; /* 28px */
// leading-8	line-height: 2rem; /* 32px */
// leading-9	line-height: 2.25rem; /* 36px */
// leading-10	line-height: 2.5rem; /* 40px */
// leading-none	line-height: 1;
// leading-tight	line-height: 1.25;
// leading-snug	line-height: 1.375;
// leading-normal	line-height: 1.5;
// leading-relaxed	line-height: 1.625;
// leading-loose	line-height: 2;

export const textVariants = cva("font-normal text-foreground", {
  variants: {
    level: {
      lgTitle: "text-4xl leading-9",
      baseTitle: "text-3xl leading-9",
      mdTitle: "text-2xl leading-8",
      smTitle: "text-xl leading-8",
      xsTitle: "text-lg leading-8",
      sub: "text-lg leading-8 text-muted-foreground tracking-wide",
      xlTall: "text-xl leading-8",
      xl: "text-xl leading-7",
      lgTall: "text-lg leading-8",
      lg: "text-lg leading-7",
      baseTall: "text-base leading-7",
      base: "text-md text-base leading-6",
      mdTall: "text-md leading-6",
      md: "text-md leading-4",
      smTall: "text-sm leading-4",
      sm: "text-sm leading-3",
      caption: "text-caption",
      xs: "text-xs leading-3",
    },
  },
  defaultVariants: {
    level: "md",
  },
});

interface TextProps
  extends ComponentPropsWithoutRef<"p">,
    VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export const Text = memo(
  forwardRef<HTMLHeadingElement, TextProps>(
    ({ level = "base", as = "p", className, ...props }, _ref) => {
      return createElement(as, {
        ref: _ref,
        className: cn(textVariants({ level: level }), className),
        ...props,
      });
    },
  ),
);

Text.displayName = "Text";
