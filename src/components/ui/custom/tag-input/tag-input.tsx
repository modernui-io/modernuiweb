"use client";

import React from "react";

import { type VariantProps } from "class-variance-authority";

import { Button } from "~/components/ui/button";
import { CommandInput } from "~/components/ui/command";
import { Input } from "~/components/ui/input";

import { Autocomplete } from "./autocomplete";
import type { tagVariants } from "./tag";
import { TagList } from "./tag-list";
import { TagPopover } from "./tag-popover";

export enum Delimiter {
  Comma = ",",
  Enter = "Enter",
}

type OmittedInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "value"
>;

export interface Tag {
  id: string;
  text: string;
}

export interface TagInputProps
  extends OmittedInputProps,
    VariantProps<typeof tagVariants> {
  value?: string | number | readonly string[] | { id: string; text: string }[];
  // Placeholder text for the input.
  placeholder?: string; // default: ""
  // Array of tags displayed as pre-selected.
  tags: Tag[];
  // Function to set the state of tags.
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  // Enable or disable the autocomplete feature.
  enableAutocomplete?: boolean; // default: false
  // List of autocomplete options.
  autocompleteOptions?: Tag[]; // default: []
  // Maximum number of tags allowed.
  maxTags?: number; // default: null
  // Minimum number of tags required.
  minTags?: number; // default: null
  // Make the input read-only.
  readOnly?: boolean; // default: false
  // Disable the input.
  disabled?: boolean; // default: false
  // Callback function when a tag is added.
  onTagAdd?: (tag: string) => void; // default: null
  // Callback function when a tag is removed.
  onTagRemove?: (tag: string) => void; // default: null
  // Allow duplicate tags.
  allowDuplicates?: boolean; // default: false
  // Maximum length of a tag.
  maxLength?: number; // default: null

  // Minimum length of a tag.
  minLength?: number; // default: null

  // Function to validate a tag.
  validateTag?: (tag: string) => boolean; // default: null

  // Character used to separate tags.
  delimiter?: Delimiter; // default: null

  // Show the count of tags.
  showCount?: boolean; // default: false

  // Placeholder text when tag limit is reached.
  placeholderWhenFull?: string; // default: ""

  // Sort tags alphabetically.
  sortTags?: boolean; // default: false

  // List of characters that can be used as delimiters.
  delimiterList?: string[]; // default: []

  // Truncate tag text to a certain length.
  truncate?: number; // default: null

  // Function to filter autocomplete options.
  autocompleteFilter?: (option: string) => boolean; // default: null

  // Layout direction of the tag inputs.
  direction?: "row" | "column"; // default: 'row'

  // A callback function that is called whenever the input value changes.
  onInputChange?: (value: string) => void; // default: null

  // A callback function that is used to render custom tag elements.
  customTagRenderer?: (tag: { id: string; text: string }) => React.ReactElement; // default: null

  // Function to be called when the input field gains focus.
  onFocus?: React.FocusEventHandler<HTMLInputElement>; // default: null

  // Function to be called when the input field loses focus.
  onBlur?: React.FocusEventHandler<HTMLInputElement>; // default: null

  // Only allow tags that are present in the autocomplete options.
  restrictTagsToAutocompleteOptions?: boolean; // default: false

  // A callback function to be called when a tag is clicked.
  onTagClick?: (tag: { id: string; text: string }) => void; // default: null

  // Enable drag and drop functionality.
  draggable?: boolean; // default: false

  // Position of the input field in relation to the tags.
  inputFieldPosition?: "bottom" | "top" | "inline"; // default: 'bottom'

  // Show a button to clear all tags.
  clearAll?: boolean; // default: false

  // A callback function to be called when the clear all button is clicked.
  onClearAll?: () => void; // default: null

  // Additional props to be passed to the input field.
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // default: {}

  // Use a popover to display tags instead of inline.
  usePopoverForTags?: boolean; // default: false
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (props, ref) => {
    const {
      id,
      placeholder,
      tags,
      setTags,
      variant,
      size,
      shape,
      className,
      enableAutocomplete,
      autocompleteOptions,
      maxTags,
      delimiter = Delimiter.Comma,
      onTagAdd,
      onTagRemove,
      allowDuplicates,
      showCount,
      validateTag,
      placeholderWhenFull = "Max tags reached",
      sortTags,
      delimiterList,
      truncate,
      autocompleteFilter,
      borderStyle,
      textCase,
      interaction,
      animation,
      textStyle,
      minLength,
      maxLength,
      direction = "row",
      onInputChange,
      customTagRenderer,
      onFocus,
      onBlur,
      onTagClick,
      draggable = false,
      inputFieldPosition = "bottom",
      clearAll = false,
      onClearAll,
      usePopoverForTags = false,
      inputProps = {},
      restrictTagsToAutocompleteOptions,
    } = props;

    const [inputValue, setInputValue] = React.useState("");
    const [tagCount, setTagCount] = React.useState(Math.max(0, tags.length));
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = React.useState<string | null>(null);

    if (
      (maxTags !== undefined && maxTags < 0) ||
      (props.minTags !== undefined && props.minTags < 0)
    ) {
      console.warn("maxTags and minTags cannot be less than 0");
      // error
      return null;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onInputChange?.(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        delimiterList
          ? delimiterList.includes(e.key)
          : // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
            e.key === delimiter || e.key === Delimiter.Enter
      ) {
        e.preventDefault();
        const newTagText = inputValue.trim();

        // Check if the tag is in the autocomplete options if restrictTagsToAutocomplete is true
        if (
          restrictTagsToAutocompleteOptions &&
          !autocompleteOptions?.some((option) => option.text === newTagText)
        ) {
          // error
          return;
        }

        if (validateTag && !validateTag(newTagText)) {
          return;
        }

        if (minLength && newTagText.length < minLength) {
          console.warn("Tag is too short");
          // error
          return;
        }

        // Validate maxLength
        if (maxLength && newTagText.length > maxLength) {
          // error
          console.warn("Tag is too long");
          return;
        }

        const newTagId = crypto
          .getRandomValues(new Uint32Array(1))[0]
          .toString();

        if (
          newTagText &&
          (allowDuplicates ?? !tags.some((tag) => tag.text === newTagText)) &&
          (maxTags === undefined || tags.length < maxTags)
        ) {
          setTags([...tags, { id: newTagId, text: newTagText }]);
          onTagAdd?.(newTagText);
          setTagCount((prevTagCount) => prevTagCount + 1);
        }
        setInputValue("");
      }
    };

    const removeTag = (idToRemove: string) => {
      setTags(tags.filter((tag) => tag.id !== idToRemove));
      onTagRemove?.(tags.find((tag) => tag.id === idToRemove)?.text ?? "");
      setTagCount((prevTagCount) => prevTagCount - 1);
    };

    const onSortEnd = (oldIndex: number, newIndex: number) => {
      setTags((currentTags) => {
        const newTags = [...currentTags];
        const [removedTag] = newTags.splice(oldIndex, 1);
        newTags.splice(newIndex, 0, removedTag);

        return newTags;
      });
    };

    const handleClearAll = () => {
      onClearAll?.();
    };

    const filteredAutocompleteOptions = autocompleteFilter
      ? autocompleteOptions?.filter((option) => autocompleteFilter(option.text))
      : autocompleteOptions;

    const displayedTags = sortTags ? [...tags].sort() : tags;

    const truncatedTags = truncate
      ? tags.map((tag) => ({
          id: tag.id,
          text:
            tag.text?.length > truncate
              ? `${tag.text.substring(0, truncate)}...`
              : tag.text,
        }))
      : displayedTags;

    return (
      <div
        className={`flex w-full gap-3 ${
          inputFieldPosition === "bottom"
            ? "flex-col"
            : inputFieldPosition === "top"
              ? "flex-col-reverse"
              : "flex-row"
        }`}
      >
        {!usePopoverForTags ? (
          <TagList
            tags={truncatedTags}
            customTagRenderer={customTagRenderer}
            variant={variant}
            size={size}
            shape={shape}
            borderStyle={borderStyle}
            textCase={textCase}
            interaction={interaction}
            animation={animation}
            textStyle={textStyle}
            onTagClick={onTagClick}
            draggable={draggable}
            onSortEnd={onSortEnd}
            onRemoveTag={removeTag}
            direction={direction}
          />
        ) : null}
        {enableAutocomplete ? (
          <div className="w-full max-w-[450px]">
            <Autocomplete
              tags={tags}
              setTags={setTags}
              autocompleteOptions={filteredAutocompleteOptions!}
              maxTags={maxTags}
              onTagAdd={onTagAdd}
              allowDuplicates={allowDuplicates ?? false}
            >
              {!usePopoverForTags ? (
                <CommandInput
                  placeholder={
                    maxTags !== undefined && tags.length >= maxTags
                      ? placeholderWhenFull
                      : placeholder
                  }
                  ref={inputRef}
                  value={inputValue}
                  disabled={maxTags !== undefined && tags.length >= maxTags}
                  onChangeCapture={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  className="w-full"
                />
              ) : (
                <TagPopover
                  tags={truncatedTags}
                  customTagRenderer={customTagRenderer}
                  variant={variant}
                  size={size}
                  shape={shape}
                  borderStyle={borderStyle}
                  textCase={textCase}
                  interaction={interaction}
                  animation={animation}
                  textStyle={textStyle}
                  onTagClick={onTagClick}
                  draggable={draggable}
                  onSortEnd={onSortEnd}
                  onRemoveTag={removeTag}
                  direction={direction}
                >
                  <CommandInput
                    placeholder={
                      maxTags !== undefined && tags.length >= maxTags
                        ? placeholderWhenFull
                        : placeholder
                    }
                    ref={inputRef}
                    value={inputValue}
                    disabled={maxTags !== undefined && tags.length >= maxTags}
                    onChangeCapture={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="w-full"
                  />
                </TagPopover>
              )}
            </Autocomplete>
          </div>
        ) : (
          <div className="w-full">
            {!usePopoverForTags ? (
              <Input
                ref={inputRef}
                id={id}
                type="text"
                placeholder={
                  maxTags !== undefined && tags.length >= maxTags
                    ? placeholderWhenFull
                    : placeholder
                }
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                {...inputProps}
                className={className}
                autoComplete={enableAutocomplete ? "on" : "off"}
                list={enableAutocomplete ? "autocomplete-options" : undefined}
                disabled={maxTags !== undefined && tags.length >= maxTags}
              />
            ) : (
              <TagPopover
                tags={truncatedTags}
                customTagRenderer={customTagRenderer}
                variant={variant}
                size={size}
                shape={shape}
                borderStyle={borderStyle}
                textCase={textCase}
                interaction={interaction}
                animation={animation}
                textStyle={textStyle}
                onTagClick={onTagClick}
                draggable={draggable}
                onSortEnd={onSortEnd}
                onRemoveTag={removeTag}
                direction={direction}
              >
                <Input
                  ref={inputRef}
                  id={id}
                  type="text"
                  placeholder={
                    maxTags !== undefined && tags.length >= maxTags
                      ? placeholderWhenFull
                      : placeholder
                  }
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  {...inputProps}
                  className={className}
                  autoComplete={enableAutocomplete ? "on" : "off"}
                  list={enableAutocomplete ? "autocomplete-options" : undefined}
                  disabled={maxTags !== undefined && tags.length >= maxTags}
                />
              </TagPopover>
            )}
          </div>
        )}

        {showCount && maxTags && (
          <div className="flex">
            <span className="ml-auto mt-1 text-sm text-muted-foreground">
              {`${tagCount}`}/{`${maxTags}`}
            </span>
          </div>
        )}
        {clearAll && (
          <Button type="button" onClick={handleClearAll} className="mt-2">
            Clear All
          </Button>
        )}
      </div>
    );
  },
);

TagInput.displayName = "TagInput";

export { TagInput };
