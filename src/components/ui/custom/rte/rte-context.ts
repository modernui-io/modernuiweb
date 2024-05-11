import type { Editor } from "@tiptap/react";

import { createSafeContext } from "~/lib/utils/create-safe-context";

import type { RichTextEditorLabels } from "./labels";

export type RichTextEditorStylesNames =
  | "root"
  | "content"
  | "control"
  | "controlsGroup"
  | "toolbar"
  | "linkEditor"
  | "linkEditorInput"
  | "linkEditorSave"
  | "linkEditorDropdown"
  | "linkEditorExternalControl";

export interface RichTextEditorContext {
  editor: Editor | null;
  labels: RichTextEditorLabels;
  withCodeHighlightStyles: boolean | undefined;
  withTypographyStyles: boolean | undefined;
  classNames: {
    [key in RichTextEditorStylesNames]?: string;
  };
}

export const [RichTextEditorProvider, useRichTextEditorContext] =
  createSafeContext<RichTextEditorContext>(
    "RichTextEditor component was not found in tree",
  );
