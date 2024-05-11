"use client";

import type { ComponentProps, ReactElement, ReactNode } from "react";

import { createTsForm } from "@ts-react/form";

import { LoadingButton } from "~/components/ui/button";
import { cn, twx } from "~/lib/utils";

import {
  AddressField,
  BooleanCheckboxField,
  BooleanSwitchField,
  CheckboxGroupField,
  DateInputField,
  FileInputField,
  MultiSelectField,
  NumberInputField,
  PasswordInputField,
  PinInputField,
  RadioGroupField,
  // AddressSchema,
  RichTextEditorField,
  SelectField,
  SwitchGroupField,
  TagsInputField,
  TextareaField,
  TextInputField,
  //   SliderField,
  //   ColorField,
  //   SegmentedControlField,
  //   TagsInputField,
  //   PillsInputField,
  //   AutocompleteField,
} from "./fields";
import { formFields } from "./form-fields";

// import {
//   FieldError,
// } from "./parts";

const FormWrapper = twx.form`flex flex-col gap-6 flex-1 w-full h-full`;
const FormWrapperBody = twx.div`flex flex-col flex-1 gap-4`;
const FormWrapperFooter = twx.div`flex gap-4`;

const mapping = [
  [formFields.address, AddressField] as const,
  [formFields.boolean, BooleanCheckboxField] as const,
  [formFields.boolean_switch, BooleanSwitchField] as const,
  [formFields.boolean_checkbox, BooleanCheckboxField] as const,
  [formFields.checkbox_group, CheckboxGroupField] as const,
  [formFields.date_input, DateInputField] as const,
  [formFields.file_input, FileInputField] as const,
  [formFields.rich_text_editor, RichTextEditorField] as const,
  [formFields.multi_select, MultiSelectField] as const,
  [formFields.number, NumberInputField] as const,
  [formFields.password, PasswordInputField] as const,
  [formFields.pin, PinInputField] as const,
  [formFields.radio_group, RadioGroupField] as const,
  [formFields.select, SelectField] as const,
  [formFields.switch_group, SwitchGroupField] as const,
  [formFields.tags_input, TagsInputField] as const,
  [formFields.text, TextInputField] as const,
  [formFields.textarea, TextareaField] as const,
] as const;

const FormComponent = ({
  children,
  renderAfter,
  loading,
  wrapperClassName,
  renderFooter,
  showSubmitButton,
  submitButtonText = "Submit",
  submitButtonProps,
  submitButtonWrapperClassName,
  isSubmitButtonFullWidth = true,
  ...restProps
}: {
  children: ReactElement;
  onSubmit: () => void;
  renderAfter?: ReactNode | undefined;
  // custom props
  loading?: boolean;
  wrapperClassName?: string;
  renderFooter?: ReactNode | undefined;
  showSubmitButton?: boolean;
  submitButtonText?: string;
  submitButtonProps?: ComponentProps<typeof LoadingButton>;
  submitButtonWrapperClassName?: string;
  isSubmitButtonFullWidth?: boolean;
}) => {
  const { className, ...restSubmitButtonProps } = submitButtonProps ?? {};
  return (
    <FormWrapper className={wrapperClassName} {...restProps}>
      <FormWrapperBody>{children}</FormWrapperBody>
      <>
        {renderAfter ? (
          <FormWrapperFooter>{renderAfter}</FormWrapperFooter>
        ) : undefined}
      </>
      <>
        {renderFooter ? (
          <FormWrapperFooter>{renderFooter}</FormWrapperFooter>
        ) : null}
      </>
      <>
        {showSubmitButton ? (
          <FormWrapperFooter className={submitButtonWrapperClassName}>
            <LoadingButton
              type="submit"
              className={cn(isSubmitButtonFullWidth ? "w-full" : "", className)}
              isLoading={loading}
              {...restSubmitButtonProps}
            >
              {submitButtonText}
            </LoadingButton>
          </FormWrapperFooter>
        ) : null}
      </>
    </FormWrapper>
  );
};

export const BaseSchemaFormDoNotImportDirectly = createTsForm(mapping, {
  FormComponent,
});

// const FormComponent = ({
//   children,
//   loading,
//   wrapperClassName,
//   bodyClassName,
//   footerClassName,
//   ...restProps
// }: {
//   children: ReactElement;
//   onSubmit: () => void;
//   // custom props
//   loading?: boolean;
//   wrapperClassName?: string;
//   bodyClassName?: string;
//   footerClassName?: string;
// }) => {
//   return (
//     <FormWrapper className={wrapperClassName} {...restProps}>
//       {children}
//     </FormWrapper>
//   );
// };
// const _SchemaForm = createTsForm(mapping, {
//   FormComponent,
// });

// export const SchemaForm: typeof _SchemaForm = ({ ...props }) => {
//   const renderAfter: ComponentProps<typeof _SchemaForm>["renderAfter"] =
//     props.renderAfter
//       ? (vars) => (
//           <FormWrapperFooter>{props.renderAfter?.(vars)}</FormWrapperFooter>
//         )
//       : undefined;

//   return (
//     <_SchemaForm {...props} renderAfter={renderAfter}>
//       {(fields, context) => (
//         <FormWrapperBody>
//           {props.children
//             ? // @ts-expect-error untyped
//               props.children(fields, context)
//             : Object.values(fields)}
//         </FormWrapperBody>
//       )}
//     </_SchemaForm>
//   );
// };

// handle manual errors (most commonly coming from a server) for cases where it's not for a specific field - make sure to wrap inside a provider first
// stopped using it cause of state issues it introduced - set the errors to specific fields instead of root for now
// export const RootError = () => {
//   const context = useFormContext();
//   const errorMessage = context?.formState?.errors?.root?.message;

//   return <FieldError message={errorMessage} />;
// };
