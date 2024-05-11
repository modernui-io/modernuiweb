import { useId } from "react";

import { useStringFieldInfo, useTsController } from "@ts-react/form";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import {
  InputOTP,
  InputOTPSlot,
  type InputOTPProps,
} from "~/components/ui/input-otp";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export type PinInputFieldProps = Partial<InputOTPProps> &
  FieldCommonProps & {
    length: number;
  };

export const PinInputField = (props: PinInputFieldProps) => {
  const {
    label: baseLabel,
    length,
    render,
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
    defaultValue,
    isOptional,
    placeholder,
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
          <InputOTP
            maxLength={length}
            value={defaultValue ?? value}
            disabled={disabled}
            {...restProps}
            {...restField}
          >
            {[...Array(length)].map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTP>
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
};
