import { useId, useState } from "react";

import { useStringFieldInfo, useTsController } from "@ts-react/form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export interface PasswordInputProps
  extends Partial<InputProps>,
    FieldCommonProps {}

export const PasswordInputField = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    label: baseLabel,
    type,
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
          <div className="relative w-full">
            <Input
              type={showPassword ? "text" : "password"}
              disabled={disabled}
              placeholder={placeholder}
              defaultValue={defaultValue}
              autoComplete="on"
              className="hide-password-toggle pr-12"
              id={id}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              {...restProps}
              {...restField}
            />
            <div
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword && !disabled ? (
                <EyeOffIcon size={20} />
              ) : (
                <EyeIcon size={20} />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </div>
          </div>
        </FormControl>
        <FieldError message={error?.errorMessage} />
      </FormItem>
    </Shake>
  );
};
