"use client";

import { useId, type Dispatch } from "react";

import type { JSONContent } from "@tiptap/core";
import { useStringFieldInfo, useTsController } from "@ts-react/form";

import {
  RichTextEditor,
  type RichTextEditorProps,
} from "~/components/ui/custom/rte";

import { FieldError, Shake } from "../parts";

export const RichTextEditorField = (
  props: Partial<RichTextEditorProps> & {
    editorContent?: string;
    setHtmlContent?: Dispatch<React.SetStateAction<string>>;
    setMarkdownContent?: Dispatch<React.SetStateAction<string>>;
    setJsonContent?: Dispatch<React.SetStateAction<JSONContent | null>>;
  },
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>();
  const { setHtmlContent, setMarkdownContent, setJsonContent, ...rest } = props;
  const {
    label,
    defaultValue = "",
    isOptional = true,
    placeholder,
  } = useStringFieldInfo();
  const id = useId();

  const disabled = isSubmitting;

  return (
    <Shake
      $error={!!error?.errorMessage}
      className="relative flex w-full flex-col gap-2 overflow-auto rounded-sm"
    >
      {label && (
        <label className="text-md font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <span>{label}</span>
          {!isOptional && <span className="ml-[3px] text-destructive">*</span>}
        </label>
      )}
      <FieldError message={error?.errorMessage} />
      <RichTextEditor
        placeholder={placeholder}
        defaultValue={defaultValue}
        editable={!disabled}
        // onUpdate={(editor) => {
        // }}
        onDebouncedUpdate={(editor) => {
          const htmlOutput = editor?.getHTML();
          const textOutput = editor?.getText();
          const jsonOutput = editor?.getJSON();
          const markdownOutput = editor?.storage.markdown.getMarkdown();

          // console.log("What is htmlOutput content", htmlOutput);
          // console.log("What is textOutput content", textOutput);
          // console.log("What is jsonOutput content", jsonOutput);
          // console.log("What is markdownOutput content", markdownOutput);

          field.onChange(textOutput ?? defaultValue);
          htmlOutput && props.setHtmlContent?.(htmlOutput);
          jsonOutput && props.setJsonContent?.(jsonOutput);
          markdownOutput && props.setMarkdownContent?.(markdownOutput);
        }}
        {...rest}
      />
    </Shake>
  );
};
