import { useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";
import { z } from "zod";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";
import { cn } from "~/lib/utils";

import { FieldError, Shake } from "../parts";
import type { FieldCommonProps } from "../types";

export const AddressSchema = z.object({
  street: z.string().min(4),
  zipCode: z.string().regex(/\d{5}/, "ZIP code should contain only 5 integers"),
});

interface AddressFieldProps extends Partial<InputProps>, FieldCommonProps {}

export const AddressField = (props: AddressFieldProps) => {
  const {
    label: baseLabel,
    description,
    wrapperClassname,
    disabled: baseDisabled,
    ...rest
  } = props;
  const {
    field: { onChange, value, ...field },
    error,
    formState: { isSubmitting },
  } = useTsController<z.infer<typeof AddressSchema>>();
  const { label } = useFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

  return (
    <fieldset
      className={cn(
        "flex flex-1 flex-col gap-4 rounded-md border p-4",
        wrapperClassname,
      )}
    >
      <div className="space-y-2">
        <legend className="text-lg font-medium">{baseLabel ?? label}</legend>
        {description && <FormDescription>{description}</FormDescription>}
      </div>
      <Shake $error={!!error?.street?.errorMessage}>
        <FormItem>
          <FormLabel>Street</FormLabel>
          <FormControl>
            <Input
              id={`${id}-street`}
              type="text"
              placeholder="e.g. 4116 Pretty View Lane"
              disabled={disabled}
              value={value?.street}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({ ...value, street: e.target.value })
              }
              onBlur={field.onBlur}
              ref={field.ref}
            />
            <FieldError message={error?.street?.errorMessage} />
          </FormControl>
        </FormItem>
      </Shake>
      <Shake $error={!!error?.zipCode?.errorMessage}>
        <FormItem>
          <FormLabel>US ZIP Code</FormLabel>
          <FormControl>
            <Input
              id={`${id}-zip-code`}
              type="text"
              placeholder="e.g. 12345"
              disabled={disabled}
              value={value?.zipCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({ ...value, zipCode: e.target.value })
              }
              onBlur={field.onBlur}
              ref={field.ref}
            />
            <FieldError message={error?.zipCode?.errorMessage} />
          </FormControl>
        </FormItem>
      </Shake>
    </fieldset>
  );
};
