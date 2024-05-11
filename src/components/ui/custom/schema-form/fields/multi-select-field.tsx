import { useCallback, useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";

import MultipleSelector, {
  type MultipleSelectorProps,
  type Option,
} from "~/components/ui/custom/multiple-selector";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export interface MultiSelectFieldProps
  extends Partial<MultipleSelectorProps>,
    FieldCommonProps {}

export function MultiSelectField(props: MultiSelectFieldProps) {
  const {
    label: baseLabel,
    description,
    options,
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
    // isOptional,
    // defaultValue,
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
          <MultipleSelector
            inputProps={{
              id,
            }}
            value={options?.filter((option) => value?.includes(option.value))}
            onChange={handleChange}
            defaultOptions={options}
            placeholder={placeholder}
            disabled={disabled}
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-foreground">
                no results found.
              </p>
            }
            {...restProps}
            {...restField}
          />
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
}
