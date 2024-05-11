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
import type { FieldCommonProps, Option } from "../types";

export interface CheckboxGroupFieldProps
  extends Partial<CheckboxProps>,
    FieldCommonProps {
  options: Option[];
}

export function CheckboxGroupField(props: CheckboxGroupFieldProps) {
  const {
    label: baseLabel,
    options,
    description,
    disabled: baseDisabled,
    ...rest
  } = props;
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string[]>();
  const { label = baseLabel, isOptional, defaultValue } = useFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

  const { onChange, value, ...restField } = field;

  return (
    <Shake $error={!!error?.errorMessage}>
      <FormItem id={id}>
        {label && (
          <div className="mb-4">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
        )}
        {options.map((item) => (
          <div key={item.value} className="flex flex-row items-start space-x-3">
            <FormControl>
              <Checkbox
                required={!isOptional}
                disabled={disabled}
                checked={value?.includes(item.value)}
                onCheckedChange={(checked) => {
                  const newValue = checked
                    ? [...(value ?? []), item.value]
                    : value?.filter((i) => i !== item.value);
                  field.onChange(newValue);
                }}
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
          </div>
        ))}
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
}
