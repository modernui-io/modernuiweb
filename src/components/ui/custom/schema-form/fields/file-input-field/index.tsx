import { useId } from "react";

import { useFieldInfo, useTsController } from "@ts-react/form";
import { toast } from "sonner";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { Shake } from "../../parts";
import type { FieldCommonProps } from "../../types";
import ValueComponent from "./value-component";

interface FileInputFieldProps extends FieldCommonProps {
  /** Function that receives button props and returns react node that should be rendered */
  children?: (props: { onClick: () => void }) => React.ReactNode;
  multiple?: boolean;
  /** File input accept attribute, for example, `"image/png,image/jpeg"` */
  accept?: string;
  /** Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. */
  capture?: boolean | "user" | "environment";

  /** Passes down props to the input element used to capture files */
  inputProps?: React.ComponentPropsWithoutRef<"input">;
}

export const FileInputField = (props: FileInputFieldProps) => {
  const {
    label: baseLabel,
    description,
    wrapperClassname,
    disabled: baseDisabled,
    children,
    multiple,
    accept,
    capture,
    inputProps,
    ...restProps
  } = props;

  const {
    field: { onChange, value, ...restField },
    error,
    formState: { isSubmitting },
  } = useTsController<File | File[]>();
  const { label = baseLabel, isOptional, placeholder } = useFieldInfo();
  const id = useId();
  const disabled = isSubmitting ?? baseDisabled;

  // const onClick = () => {
  //   !disabled && restField.ref?.arguments[0]?.click();
  // };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(event.currentTarget?.files ?? []);
    if (multiple) {
      onChange(fileList);
    } else {
      onChange(fileList[0]);
    }
  };

  const handleRemove = (file: File) => {
    if (Array.isArray(value)) {
      onChange(value.filter((f) => f !== file));
    } else {
      onChange(undefined);
    }
    toast.success("File removed");
  };

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
          <Input
            type="file"
            id={id}
            accept={accept}
            capture={capture}
            multiple={multiple}
            disabled={disabled}
            placeholder={placeholder}
            {...inputProps}
            {...restProps}
            {...restField}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormMessage />
        {/* {children?.({ onClick, ...restProps })} */}
        {value && (
          <ValueComponent
            value={value}
            showPreview
            handleRemoveFile={handleRemove}
          />
        )}
      </FormItem>
    </Shake>
  );
};
