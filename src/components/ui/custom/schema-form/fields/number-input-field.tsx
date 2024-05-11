import { useId } from "react";

import { useNumberFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export interface NumberInputFieldProps
  extends Partial<InputProps>,
    FieldCommonProps {}

export const NumberInputField = (props: NumberInputFieldProps) => {
  const {
    label: baseLabel,
    description,
    disabled: baseDisabled,
    wrapperClassname,
    minLength,
    maxLength,
    ...restProps
  } = props;
  const {
    field: { onChange, value, ...restField },
    error,
    formState: { isSubmitting },
  } = useTsController<number>();
  const {
    label = baseLabel,
    defaultValue,
    isOptional,
    placeholder,
    minValue,
    maxValue,
  } = useNumberFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

  return (
    <Shake $error={!!error?.errorMessage}>
      <FormItem className={wrapperClassname}>
        {label && (
          <FormLabel>
            {label}
            {!isOptional && (
              <span className="text-destructive opacity-50"> *</span>
            )}
          </FormLabel>
        )}
        {description && <FormDescription>{description}</FormDescription>}
        <FormControl>
          <Input
            id={id}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            spellCheck={false}
            autoCapitalize="none"
            disabled={disabled}
            type="number"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            {...restProps}
            {...restField}
          />
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
};
