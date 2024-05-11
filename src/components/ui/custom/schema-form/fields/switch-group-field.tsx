import { useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Switch, type SwitchProps } from "~/components/ui/switch";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps, Option } from "../types";

export interface SwitchGroupFieldProps
  extends Partial<SwitchProps>,
    FieldCommonProps {
  options: Option[];
}

export function SwitchGroupField(props: SwitchGroupFieldProps) {
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
        {options.map((option, index) => {
          const { label: optionLabel, value: optionValue, ...rest } = option;
          return (
            <div
              key={optionValue}
              className="flex flex-row items-start space-x-3"
            >
              <FormControl>
                <Switch
                  required={!isOptional}
                  disabled={disabled}
                  checked={value?.includes(optionValue)}
                  onCheckedChange={(checked) => {
                    const newValue = checked
                      ? [...(value ?? []), optionValue]
                      : value?.filter((i) => i !== optionValue);
                    field.onChange(newValue);
                  }}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal">
                {optionLabel}
              </FormLabel>
            </div>
          );
        })}
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
}
