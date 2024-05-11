import React, { forwardRef } from "react";

import { cn } from "~/lib/utils";
import type { ElementProps } from "~/types";

import { useRichTextEditorContext } from "../rte-context";

export type RichTextEditorControlsGroupStylesNames = "controlsGroup";

export type RichTextEditorControlsGroupProps = ElementProps<"div">;

export const RichTextEditorControlsGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & RichTextEditorControlsGroupProps
>((props, ref) => {
  const { className, style, ...others } = props;
  const ctx = useRichTextEditorContext();

  return (
    <div
      {...others}
      className={cn(ctx.classNames?.controlsGroup, className)}
      ref={ref}
    />
  );
});

RichTextEditorControlsGroup.displayName = "RichTextEditorControlsGroup";
