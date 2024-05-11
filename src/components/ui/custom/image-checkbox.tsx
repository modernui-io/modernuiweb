import * as React from "react";
import Image from "next/image";

import { CardWithLabel } from "~/components/ui/card";
import { cn } from "~/lib/utils";

type ImageCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "className" | "ref"
> & {
  image?: string;
  className?: string;
  label: string;
  type?: "checkbox" | "radio";
  direction?: "horizontal" | "vertical";
  error?: string | string[];
};

export const ImageCheckbox = React.forwardRef<
  HTMLInputElement,
  ImageCheckboxProps
>(
  (
    {
      id,
      image,
      label,
      value,
      className,
      direction = "vertical",
      type = "checkbox",
      ...checkboxProps
    },
    ref,
  ) => {
    const defaultId = React.useId();
    const checkboxId = id ?? defaultId;

    return (
      <div className="flex h-full w-full">
        <input
          ref={ref}
          type={type}
          id={checkboxId}
          defaultValue={value}
          className="peer sr-only"
          {...checkboxProps}
        />
        <CardWithLabel
          htmlFor={checkboxId}
          className={cn(
            "group flex cursor-pointer items-center ring-primary/20",
            "transition duration-150",
            "peer-checked:ring-2 peer-checked:ring-primary",
            "peer-focus:border-primary peer-focus:ring-2",
            "peer-disabled:cursor-default",
            {
              "py-2": !!image,
              "py-3": !image,
              "flex-col justify-center text-xs": direction === "vertical",
              "flex-row gap-2 text-sm": direction === "horizontal",
            },
            className,
          )}
        >
          {image && (
            <div className="h-8 w-8 p-1">
              <Image
                src={image}
                alt={label}
                width={32}
                height={32}
                className="aspect-square object-contain object-center"
              />
            </div>
          )}
          <p className="max-w-full flex-shrink flex-grow-0 overflow-x-hidden text-ellipsis whitespace-nowrap">
            {label}
          </p>
        </CardWithLabel>
      </div>
    );
  },
);
