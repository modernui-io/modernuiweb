import * as React from "react";

import { CheckIcon } from "lucide-react";

import { cn } from "~/lib/utils";

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> & {
  label: string;
  error?: string | string[];
};

export const Checkbox = React.forwardRef<
  React.ElementRef<"input">,
  CheckboxProps
>(function Checkbox({ className, label, id, error, ...checkboxProps }, ref) {
  const defaultId = React.useId();
  const errorId = React.useId();
  const checkboxId = id ?? defaultId;
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <input
        ref={ref}
        type="checkbox"
        id={checkboxId}
        className="peer sr-only"
        aria-describedby={errorId}
        {...checkboxProps}
      />
      <label
        className={cn(
          "group flex items-center gap-2",
          "[--display-checked:none] [--display-unchecked:flex]",
          "peer-checked:[--display-checked:flex] peer-checked:[--display-unchecked:none]",
          "text-muted peer-checked:text-foreground",
        )}
        htmlFor={checkboxId}
      >
        <div
          aria-hidden="true"
          style={{
            display: "var(--display-unchecked)",
          }}
          className={cn(
            "border-mid-dark-100 h-4 w-4 flex-none rounded-md border bg-white",
          )}
        ></div>
        <div
          aria-hidden="true"
          style={{
            display: "var(--display-checked)",
          }}
          className={cn(
            "h-4 w-4 flex-none rounded-md border border-primary bg-primary",
            "flex items-center justify-center",
          )}
        >
          <CheckIcon className="size-2.5 text-white" />
        </div>
        <p>{label}</p>
      </label>

      {error && (
        <small
          id={errorId}
          aria-live="polite"
          className={cn("flex flex-wrap gap-1 text-red-400")}
        >
          {typeof error === "string"
            ? error
            : error.map((msg, index) => <span key={index}>{msg}</span>)}
        </small>
      )}
    </div>
  );
});
