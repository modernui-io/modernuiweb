import { useId } from "react";

import { useStringFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export interface TextInputFieldProps
  extends Partial<InputProps>,
    FieldCommonProps {}

export const TextInputField = (props: TextInputFieldProps) => {
  const {
    label: baseLabel,
    description,
    disabled: baseDisabled,
    wrapperClassname,
    ...restProps
  } = props;
  const {
    field: { onChange, value, ...restField },
    error,
    formState: { isSubmitting },
  } = useTsController<string>();
  const {
    label = baseLabel,
    placeholder,
    isOptional,
    minLength,
    maxLength,
    isEmail,
  } = useStringFieldInfo();
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
            spellCheck={isEmail ? false : undefined}
            autoCapitalize={isEmail ? "none" : undefined}
            disabled={disabled}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...restField}
          />
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
};
