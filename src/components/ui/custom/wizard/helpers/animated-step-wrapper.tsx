"use client";

import type { ReactNode } from "react";

import { m } from "framer-motion";

import { animatedStepXVariants } from "~/lib/config/motion";
import { cn } from "~/lib/utils";

interface AnimatedStepWrapperProps {
  stepKey: string;
  title: string | ReactNode;
  titleTooltip?: string;
  titleClassName?: string;
  description?: string | ReactNode;
  children: ReactNode;
  className?: string;
  is2Col?: boolean;
}

const AnimatedStepWrapper = ({
  stepKey,
  title,
  titleTooltip,
  titleClassName,
  description,
  children,
  className,
  is2Col,
}: AnimatedStepWrapperProps) => {
  return (
    <m.div
      key={stepKey}
      className={cn(
        "h-full w-full",
        is2Col
          ? "grid lg:grid-cols-2 lg:justify-between"
          : "flex flex-col gap-16",
        className,
      )}
      variants={animatedStepXVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl font-normal leading-[44px] text-secondary-foreground md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="text-tetiary-foreground leading-[30px] tracking-tight md:text-lg">
            {description}
          </p>
        )}
      </div>
      {children}
    </m.div>
  );
};

export default AnimatedStepWrapper;
