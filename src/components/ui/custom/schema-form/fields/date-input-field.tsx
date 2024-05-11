import { useId } from "react";

import {
  DateInput as MantineDateInput,
  type DateInputProps,
} from "@mantine/dates";
import { useFieldInfo, useTsController } from "@ts-react/form";

import { Shake } from "../parts";

export function DateInputField(props: DateInputProps) {
  const { label: baseLabel, ...rest } = props;

  const { label, isOptional, defaultValue, placeholder } = useFieldInfo();

  const {
    field: { onChange, ...field },
    error,
    formState: { isSubmitting },
  } = useTsController<Date>();
  const id = useId();
  const disabled = isSubmitting;

  return (
    <Shake $error={!!error?.errorMessage}>
      <MantineDateInput
        id={id}
        label={baseLabel ?? label}
        error={error?.errorMessage}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        withAsterisk={!isOptional}
        onChange={(value) => onChange(value ?? undefined)}
        {...rest}
        {...field}
      />
    </Shake>
  );
}
