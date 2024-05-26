import "./rte.css";

import { memo } from "react";

import type { EditorProps } from "@tiptap/pm/view";
import {
  useEditor,
  type Editor,
  type Extensions,
  type JSONContent,
} from "@tiptap/react";
import { useDebouncedCallback } from "use-debounce";

import { cn } from "~/lib/utils";

import {
  RichTextEditorBase,
  RichTextEditorContent,
  type RichTextEditorContext,
} from "./exports";
import { getExtensions } from "./extensions";
import { EditorBubbleMenu, EditorFloatingMenu, EditorToolbar } from "./menus";
import { defaultClassNames, mergeClassNames } from "./styles";

export interface RichTextEditorProps {
  classNames?: RichTextEditorContext["classNames"];
  placeholder?: string;
  editable?: boolean;
  wordLimit?: number;
  showWordCount?: boolean;
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
  sessionStorageKey?: string;
  enableSessionStorage?: boolean;

  /**
   * Additional classes to add to the editor container.
   * Defaults to "relative min-h-[400px] w-full max-w-screen-lg border bg-background sm:mb-[calc(10vh)] sm:rounded-md sm:border sm:shadow-md".
   */
  className?: string;
  /**
   * The default value to use for the editor.
   * Defaults to defaultEditorContent.
   */
  defaultValue?: JSONContent | string;
  /**
   * A list of extensions to use for the editor, in addition to the default current extensions.
   * Defaults to [].
   */
  extensions?: Extensions;
  /**
   * Props to pass to the underlying Tiptap editor, in addition to the default current editor props.
   * Defaults to {}.
   */
  editorProps?: EditorProps;
  /**
   * A callback function that is called whenever the editor is updated.
   * Defaults to () => {}.
   */
  // onUpdate?: (editor?: Editor) => void | Promise<void>;
  /**
   * A callback function that is called whenever the editor is updated, but only after the defined debounce duration.
   * Defaults to () => {}.
   */
  onDebouncedUpdate?: (editor?: Editor) => void | Promise<void>;
  /**
   * The duration (in milliseconds) to debounce the onDebouncedUpdate callback.
   * Defaults to 750.
   */
  debounceDuration?: number;
  // For @mentions
  // mentions?: ISelectOption[];

  // More props here
  alreadyHasTitle?: boolean;
  autofocus?: boolean;
  // Floating menu
  hideFloatingMenu?: boolean;
  // Bubble menu
  hideBubbleMenu?: boolean;
  // Toolbar
  showTopToolbar?: boolean;
  showBottomToolbar?: boolean;
  stickyToolbar?: boolean;
  toolbarOffset?: number;
}

const RichTextEditorDoNotImportDirectly = memo(
  ({
    editable = true,
    wordLimit,
    showWordCount,
    slotBefore,
    slotAfter,
    className = "",
    defaultValue = "",
    extensions = [],
    editorProps = {},
    // onUpdate = () => {},
    onDebouncedUpdate = () => {},
    debounceDuration = 750,
    alreadyHasTitle = true,
    classNames,
    placeholder = "Please enter some content",
    hideFloatingMenu = true,
    hideBubbleMenu = false,
    showTopToolbar = true,
    showBottomToolbar = false,
    stickyToolbar = true,
    toolbarOffset = 60,
  }: RichTextEditorProps) => {
    const debouncedUpdates = useDebouncedCallback(
      async ({ editor, transaction }) => {
        await onDebouncedUpdate(editor);
        // https://github.com/ueberdosis/tiptap/issues/3700
        // https://gist.github.com/stevecastaneda/eb50aed3e5903aac2995f7cc850f71b1
        // const nodeIds = new Set<string>();
        // transaction.doc.forEach((node) => {
        //   if (node.attrs.id) {
        //     nodeIds.add(node.attrs.id);
        //   }
        // });
        // transaction.before.forEach((node) => {
        //   if (node.attrs.id && !nodeIds.has(node.attrs.id)) {
        //     onNodeDeleted(node);
        //   }
        // });
      },
      debounceDuration,
    );

    const editor = useEditor({
      content: defaultValue,
      extensions: getExtensions({ placeholder }),
      editorProps: {
        // ...defaultEditorProps,
        ...editorProps,
      },
      onUpdate: (e) => {
        // void onUpdate(e.editor);
        void debouncedUpdates(e);
      },
      autofocus: "end",
      onCreate: (e) => {
        e.editor.setEditable(editable);
      },
    });

    const mergedClassNames = mergeClassNames(defaultClassNames, classNames);

    return (
      <div
        className={cn("flex h-full max-h-fit w-full flex-col gap-4", className)}
      >
        <RichTextEditorBase editor={editor} classNames={mergedClassNames}>
          {editor && !hideFloatingMenu && (
            <EditorFloatingMenu
              editor={editor}
              alreadyHasTitle={alreadyHasTitle}
            />
          )}

          {editor && !hideBubbleMenu && (
            <EditorBubbleMenu
              editor={editor}
              alreadyHasTitle={alreadyHasTitle}
            />
          )}

          {editor && showTopToolbar && (
            <EditorToolbar
              sticky={stickyToolbar}
              stickyOffset={toolbarOffset}
              editor={editor}
              alreadyHasTitle={alreadyHasTitle}
            />
          )}

          {slotBefore && slotBefore}
          <RichTextEditorContent />

          {editor && showBottomToolbar && (
            <EditorToolbar
              isBottom={true}
              editor={editor}
              alreadyHasTitle={alreadyHasTitle}
            />
          )}
          {/* {editor?.isActive("image") && <ImageResizer editor={editor} />} */}
          {slotAfter && slotAfter}
        </RichTextEditorBase>

        {editor && showWordCount && (
          <div className="">
            {editor.storage.characterCount.characters()}
            {wordLimit && <span>/{wordLimit} characters</span>}
            <br />
            {editor.storage.characterCount.words()} words
          </div>
        )}
      </div>
    );
  },
);

RichTextEditorDoNotImportDirectly.displayName = "RichTextEditor";

export { RichTextEditorDoNotImportDirectly };
