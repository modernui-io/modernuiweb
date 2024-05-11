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
import type { FieldCommonProps } from "../types";

export interface BooleanSwitchFieldProps
  extends Partial<SwitchProps>,
    FieldCommonProps {}

export const BooleanSwitchField = (props: BooleanSwitchFieldProps) => {
  const {
    label: baseLabel,
    description,
    disabled: baseDisabled,
    ...rest
  } = props;
  const {
    field: { onChange, value, ...field },
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
            <Switch
              required={!isOptional}
              disabled={disabled}
              checked={value}
              onCheckedChange={(checked) => onChange(checked)}
              id={id}
              {...rest}
              {...field}
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
