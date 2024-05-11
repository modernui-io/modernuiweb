import { useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps, Option } from "../types";

interface SelectFieldProps extends FieldCommonProps {
  options: Option[];
}

export const SelectField = (props: SelectFieldProps) => {
  const {
    label: baseLabel,
    options,
    description,
    disabled: baseDisabled,
    wrapperClassname,
    ...restProps
  } = props;
  const {
    field: { onChange, value, ...restFields },
    error,
    formState: { isSubmitting },
  } = useTsController<string>();
  const {
    label = baseLabel,
    isOptional,
    placeholder,
    defaultValue,
  } = useFieldInfo();
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
          <Select
            disabled={disabled}
            defaultValue={defaultValue}
            onValueChange={(value) => onChange(value ?? undefined)}
            {...restProps}
            {...restFields}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder ?? "Pick a value"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
};
