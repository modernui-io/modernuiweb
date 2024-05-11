import { useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";

import { Checkbox, type CheckboxProps } from "~/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export interface BooleanCheckboxFieldProps
  extends Partial<CheckboxProps>,
    FieldCommonProps {}

export const BooleanCheckboxField = (props: BooleanCheckboxFieldProps) => {
  const {
    label: baseLabel,
    description,
    disabled: baseDisabled,
    ...restProps
  } = props;
  const {
    field: { onChange, value, ...restField },
    error,
    formState: { isSubmitting },
  } = useTsController<boolean>();
  const { label = baseLabel, isOptional } = useFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

  return (
    <Shake $error={!!error?.errorMessage}>
      <FormItem>
        <FormControl>
          <div className="flex flex-row items-start space-x-2">
            <Checkbox
              required={!isOptional}
              disabled={disabled}
              checked={value}
              onCheckedChange={(checked) =>
                onChange(checked === true ? false : true)
              }
              id={id}
              {...restProps}
              {...restField}
            />
            <div className="space-y-1">
              {label && <FormLabel>{label}</FormLabel>}
              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </div>
          <FieldError message={error?.errorMessage} />
        </FormControl>
      </FormItem>
    </Shake>
  );
};
