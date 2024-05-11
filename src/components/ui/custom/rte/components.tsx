import React from "react";

import { EditorContent } from "@tiptap/react";

import { cn } from "~/lib/utils";
import type { ElementProps } from "~/types";

import { useRichTextEditorContext } from "./rte-context";

export type RichTextEditorContentStylesNames = "content";

export interface RichTextEditorContentProps extends ElementProps<"div"> {
  className?: string;
}

export const RichTextEditorContent = ({
  className,
  ...others
}: RichTextEditorContentProps) => {
  const ctx = useRichTextEditorContext();

  return (
    <EditorContent
      editor={ctx.editor}
      className={cn(ctx.classNames?.content, className)}
      {...others}
    />
  );
};

export type RichTextEditorToolbarStylesNames = "toolbar";

export interface RichTextEditorToolbarProps extends ElementProps<"div"> {
  /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
  sticky?: boolean;
  /** Sets top style to offset elements with fixed position, `0` by default */
  stickyOffset?: React.CSSProperties["top"];
}

export const RichTextEditorToolbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & RichTextEditorToolbarProps
>((props, ref) => {
  const { className, style, sticky, stickyOffset, ...others } = props;
  const ctx = useRichTextEditorContext();

  return (
    <div
      {...others}
      className={cn(ctx.classNames?.toolbar, className)}
      ref={ref}
    />
  );
});

RichTextEditorToolbar.displayName = "RichTextEditorToolbar";
