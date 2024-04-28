import {
  forwardRef,
  type ElementType,
  type ForwardRefRenderFunction,
} from "react";

import { clsx, type ClassValue } from "clsx";
import { createTwc, type TwcComponentProps } from "react-twc";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });

export type TWComponentProps<T extends ElementType> = Omit<
  TwcComponentProps<T>,
  "className"
> & {
  className?: string;
};

/** Pairs with `.vscode/settings.json` to provide intellisense for tailwind classes:
 * ```json
 * "tailwindCSS.experimental.classRegex": [
 *     "tw`([^`]*)`"
 * ]
 * ```
 */
export const tw = (strings: TemplateStringsArray) => strings.join("");

// forward refs
export function fr<T = HTMLElement, P = React.HTMLAttributes<T>>(
  component: ForwardRefRenderFunction<T, P>,
) {
  const wrapped = forwardRef(component);
  wrapped.displayName = component.name;
  return wrapped;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmpty = (value: any) => {
  if (typeof value === "string") {
    return value === null || value === undefined || value.length === 0;
  } else if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return value === null || value === undefined;
};

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
