import { useId } from "react";

import { useStringFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Textarea, type TextareaProps } from "~/components/ui/textarea";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export interface TextareaFieldProps
  extends Partial<TextareaProps>,
    FieldCommonProps {}

export const TextareaField = (props: TextareaFieldProps) => {
  const {
    label: baseLabel,
    description,
    disabled: baseDisabled,
    wrapperClassname,
    rows,
    ...restProps
  } = props;
  const {
    field: { onChange, value, ...restField },
    error,
    formState: { isSubmitting },
  } = useTsController<string>();
  const { label = baseLabel, placeholder, isOptional } = useStringFieldInfo();
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
          <Textarea
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            id={id}
            disabled={disabled}
            rows={rows ?? 3}
            {...restField}
          />
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
};
