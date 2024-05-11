import React, { useMemo } from "react";

import { cn } from "~/lib/utils";
import type { ElementProps } from "~/types";

import { DEFAULT_LABELS } from "./labels";
import {
  RichTextEditorProvider,
  type RichTextEditorContext,
} from "./rte-context";

export interface RichTextEditorBaseProps extends ElementProps<"div"> {
  /** Child editor components */
  children: React.ReactNode;

  /** Tiptap editor instance */
  editor: RichTextEditorContext["editor"];

  /** Determines whether code highlight styles should be added, `true` by default */
  withCodeHighlightStyles?: RichTextEditorContext["withCodeHighlightStyles"];

  /** Determines whether typography styles should be added, `true` by default */
  withTypographyStyles?: RichTextEditorContext["withTypographyStyles"];

  /** Labels that are used in controls */
  labels?: Partial<RichTextEditorContext["labels"]>;
  classNames?: RichTextEditorContext["classNames"];
}

export const RichTextEditorBase = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & RichTextEditorBaseProps
>((props, ref) => {
  const {
    classNames = {},
    className,
    style,
    editor,
    withCodeHighlightStyles,
    withTypographyStyles,
    labels,
    children,
    ...others
  } = props;

  const mergedLabels = useMemo(
    () => ({ ...DEFAULT_LABELS, ...labels }),
    [labels],
  );

  return (
    <RichTextEditorProvider
      value={{
        editor,
        classNames,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles,
      }}
    >
      <div
        className={cn(classNames?.root, className)}
        style={style}
        {...others}
        ref={ref}
      >
        {children}
      </div>
    </RichTextEditorProvider>
  );
});

RichTextEditorBase.displayName = "RichTextEditorBase";
