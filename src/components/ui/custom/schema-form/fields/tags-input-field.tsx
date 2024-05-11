import { useCallback, useId, useState } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";

import {
  TagInput,
  type Tag,
  type TagInputProps,
} from "~/components/ui/custom/tag-input";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps, Option } from "../types";

export interface TagsInputFieldProps
  extends Partial<TagInputProps>,
    FieldCommonProps {
  options: Option[];
}

export function TagsInputField(props: TagsInputFieldProps) {
  const {
    label: baseLabel,
    options,
    description,
    disabled: baseDisabled,
    wrapperClassname,
    ...restProps
  } = props;

  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string[]>();
  const {
    label = baseLabel,
    isOptional,
    defaultValue,
    placeholder,
  } = useFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

  const { onChange, value, ...restField } = field;

  const handleChange = useCallback(
    (options: Option[]) => {
      const newValue = options.map((option) => option.value);
      onChange(newValue);
    },
    [onChange],
  );

  return (
    <Shake $error={!!error?.errorMessage}>
      <FormItem id={id}>
        {label && (
          <div className="mb-4">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
        )}
        <FormControl>
          <TagInput
            id={id}
            placeholder="Enter a topic"
            disabled={disabled}
            tags={options
              ?.filter((option) => value?.includes(option.value))
              .map((option) => ({
                id: option.value,
                text: String(option.label),
              }))}
            // using Shadcn input styling
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-[450px]"
            setTags={(newTags) => {
              const newOptions = (newTags as [Tag, ...Tag[]]).map((tag) => ({
                label: tag.text,
                value: tag.id,
              }));
              handleChange(newOptions);
            }}
            {...restProps}
            {...restField}
          />
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
}
