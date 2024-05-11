/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, cloneElement } from "react";

import { cn } from "~/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full overflow-hidden [--duration:100s] [--gap:2rem]",
        className,
      )}
    >
      <div
        className={cn(
          "animate-marquee flex w-max transform-gpu items-stretch gap-[--gap]",
          {
            "[animation-direction:reverse]": reverse,
            "hover:[animation-play-state:paused]": pauseOnHover,
          },
        )}
      >
        {Children.map(children, (child) => cloneElement(child as any))}
        {Children.map(children, (child) => cloneElement(child as any))}
        {Children.map(children, (child) => cloneElement(child as any))}
      </div>
    </div>
  );
};

export default Marquee;
