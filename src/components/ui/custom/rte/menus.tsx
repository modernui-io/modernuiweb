import React from "react";

import { BubbleMenu, FloatingMenu, type Editor } from "@tiptap/react";

import { RichTextEditorToolbar } from "./components";
import {
  // StrikeThroughControl,
  BlockquoteControl,
  BoldControl,
  BulletListControl,
  ClearFormattingControl,
  H1Control,
  H2Control,
  H3Control,
  H4Control,
  HighlightControl,
  HrControl,
  ItalicControl,
  OrderedListControl,
  RedoControl,
  UnderlineControl,
  UndoControl,
  UnlinkControl,
} from "./controls";
import { EmojiControl } from "./controls/emoji-control";
import { RichTextEditorLinkControl } from "./controls/link-control";
import { RichTextEditorControlsGroup } from "./controls/rte-controls-group";

export const EditorFloatingMenu = ({
  editor,
  alreadyHasTitle,
}: {
  editor: Editor;
  alreadyHasTitle?: boolean;
}) => {
  return (
    <FloatingMenu editor={editor}>
      <RichTextEditorControlsGroup>
        {!alreadyHasTitle && <H1Control />}
        <H2Control />
        {!!alreadyHasTitle && <H3Control />}
        <BulletListControl />
        <OrderedListControl />
        <HrControl />
        {/* <ImageUploadControl /> */}
        <EmojiControl />
      </RichTextEditorControlsGroup>
    </FloatingMenu>
  );
};

export const EditorBubbleMenu = ({
  editor,
  alreadyHasTitle,
}: {
  editor: Editor;
  alreadyHasTitle?: boolean;
}) => {
  return (
    <BubbleMenu editor={editor}>
      <RichTextEditorControlsGroup>
        {!alreadyHasTitle && <H1Control />}
        <H2Control />
        <H3Control />
        <H4Control />
        <BoldControl />
        <ItalicControl />
        <RichTextEditorLinkControl />
        <UnlinkControl />
        <HighlightControl />
        <ClearFormattingControl />
      </RichTextEditorControlsGroup>
    </BubbleMenu>
  );
};

export const EditorToolbar = ({
  editor,
  alreadyHasTitle,
  isBottom,
  sticky,
  stickyOffset,
}: {
  editor: Editor;
  alreadyHasTitle?: boolean;
  isBottom?: boolean;
  sticky?: boolean;
  stickyOffset?: number;
}) => {
  return (
    <RichTextEditorToolbar
      className={isBottom ? "border-t" : ""}
      style={isBottom ? { borderBottom: "none", borderRadius: 0 } : {}}
      sticky={sticky}
      stickyOffset={stickyOffset}
    >
      <RichTextEditorControlsGroup>
        <BoldControl />
        <ItalicControl />
        <UnderlineControl />
        {/* <StrikeThroughControl /> */}
        {/* <ClearFormattingControl />
                <HighlightControl /> */}
      </RichTextEditorControlsGroup>

      <RichTextEditorControlsGroup>
        {!alreadyHasTitle && <H1Control />}
        <H2Control />
        <H3Control />
        <H4Control />
      </RichTextEditorControlsGroup>

      <RichTextEditorControlsGroup>
        <EmojiControl />
        <RichTextEditorLinkControl />
        <UnlinkControl />
        <HrControl />
      </RichTextEditorControlsGroup>

      <RichTextEditorControlsGroup className="hidden md:inline-flex">
        <BlockquoteControl />
        <HrControl />
        <BulletListControl />
        <OrderedListControl />
      </RichTextEditorControlsGroup>

      <RichTextEditorControlsGroup className="md:hidden">
        <UndoControl />
        <RedoControl />
      </RichTextEditorControlsGroup>

      {/* <RichTextEditorControlsGroup>
                <RichTextEditor.AlignLeft />
                <RichTextEditor.AlignCenter />
                <RichTextEditor.AlignJustify />
                <RichTextEditor.AlignRight />
              </RichTextEditorControlsGroup> */}
    </RichTextEditorToolbar>
  );
};
