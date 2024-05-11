import type { ReactNode } from "react";

export interface FieldCommonProps {
  label?: string;
  description?: string;
  wrapperClassname?: string;
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Option<OtherProps = {}> = {
  label: ReactNode;
  value: string;
} & OtherProps;

// eslint-disable-next-line @typescript-eslint/ban-types
export interface Options<OtherProps = {}> {
  options: Option<OtherProps>[];
}

export type Controlled<T> = { label?: ReactNode } & T;
