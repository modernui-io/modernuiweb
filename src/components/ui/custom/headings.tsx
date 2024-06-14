import {
  createElement,
  forwardRef,
  memo,
  type ComponentPropsWithoutRef,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

export const headingVariants = cva(
  "block text-balance font-heading font-medium",
  {
    variants: {
      level: {
        lgDisplay:
          "text-4xl: scroll-m-20 leading-tight tracking-wider text-accent-foreground md:text-5xl lg:text-6xl",
        mdDisplay:
          "text-3xl: scroll-m-20 leading-tight text-accent-foreground md:text-4xl lg:text-5xl",
        smDisplay:
          "text-2xl: scroll-m-20 leading-tight text-accent-foreground md:text-3xl lg:text-4xl",
        xsDisplay:
          "text-xl: scroll-m-20 leading-tight text-accent-foreground md:text-2xl lg:text-3xl",
        1: "scroll-m-20 text-3xl leading-snug tracking-tight text-secondary-foreground md:text-4xl",
        2: "scroll-m-20 text-2xl leading-snug tracking-tight text-secondary-foreground md:text-3xl",
        3: "scroll-m-20 text-xl leading-snug tracking-tight text-secondary-foreground md:text-2xl",
        4: "text-lg leading-7 tracking-wider text-secondary-foreground md:text-xl",
        5: "text-base leading-6 tracking-wide text-secondary-foreground md:text-lg",
        6: "text-sm leading-5 tracking-wide text-secondary-foreground md:text-base",
        sub: "text-base leading-7 tracking-wide text-muted-foreground md:text-lg md:leading-7",
      },
    },
    defaultVariants: {
      level: 3,
    },
  },
);

interface HeadingProps
  extends ComponentPropsWithoutRef<"h1">,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
}

export const Heading = memo(
  forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ level = 3, className, as = "h3", ...props }, _ref) => {
      const C =
        level === "sub" ? "span" : typeof level !== "number" ? as : `h${level}`;
      return createElement(C, {
        ref: _ref,
        className: cn(headingVariants({ level: level }), className),
        ...props,
      });
    },
  ),
);

Heading.displayName = "Heading";
