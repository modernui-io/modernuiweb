import {
  createElement,
  forwardRef,
  memo,
  type ComponentPropsWithoutRef,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

export const headingVariants = cva(
  "text-balance font-heading font-medium block",
  {
    variants: {
      level: {
        lgDisplay:
          "text-4xl: md:text-5xl lg:text-6xl leading-tight tracking-wider text-accent-foreground scroll-m-20",
        mdDisplay:
          "text-3xl: md:text-4xl lg:text-5xl leading-tight text-accent-foreground scroll-m-20",
        smDisplay:
          "text-2xl: md:text-3xl lg:text-4xl leading-tight text-accent-foreground scroll-m-20",
        xsDisplay:
          "text-xl: md:text-2xl lg:text-3xl leading-tight text-accent-foreground scroll-m-20",
        1: "text-3xl md:text-4xl leading-snug tracking-wider text-secondary-foreground scroll-m-20",
        2: "text-2xl md:text-3xl leading-snug tracking-wider text-secondary-foreground scroll-m-20",
        3: "text-xl md:text-2xl leading-snug tracking-wider text-secondary-foreground scroll-m-20",
        4: "text-lg md:text-xl leading-7 tracking-wider text-secondary-foreground",
        5: "text-base md:text-lg leading-6 tracking-wide text-secondary-foreground",
        6: "text-sm md:text-base leading-5 tracking-wide text-secondary-foreground",
        sub: "text-base leading-7 md:text-lg md:leading-7 tracking-wide text-muted-foreground tracking-wide",
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
