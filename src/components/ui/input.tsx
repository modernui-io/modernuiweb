import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightSection?: JSX.Element;
  leftSection?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rightSection, leftSection, ...props }, ref) => {
    const CompWrapper = rightSection ?? leftSection ? "div" : React.Fragment;
    const compWrapperProps =
      rightSection ?? leftSection
        ? { className: "relative inline-block h-9" }
        : {};
    return (
      <CompWrapper {...compWrapperProps}>
        {leftSection && (
          <span
            className={cn(
              " absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground",
            )}
          >
            {leftSection}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {rightSection && (
          <span
            className={cn(
              "absolute left-auto right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground",
            )}
          >
            {rightSection}
          </span>
        )}
      </CompWrapper>
    );
  },
);
Input.displayName = "Input";

export { Input };
