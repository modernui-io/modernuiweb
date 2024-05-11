import { useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
} from "~/components/ui/radio-group";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps, Option } from "../types";

export interface RadioGroupFieldProps
  extends Partial<RadioGroupProps>,
    FieldCommonProps {
  options: Option[];
}

export function RadioGroupField(props: RadioGroupFieldProps) {
  const {
    label: baseLabel,
    options,
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
  const { label, isOptional, defaultValue } = useFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

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
          <RadioGroup
            onValueChange={onChange}
            defaultValue={defaultValue}
            disabled={disabled}
            className="flex flex-col space-y-1"
            {...restProps}
            {...restField}
          >
            {options.map((option) => (
              <FormItem
                className="flex items-center space-x-3 space-y-0"
                key={option.value}
              >
                <FormControl>
                  <RadioGroupItem value={option.value} />
                </FormControl>
                <FormLabel className="font-normal">{option.label}</FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
}
