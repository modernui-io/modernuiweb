export type ComponentSectionTypes =
  | "all"
  | "hero"
  | "cta"
  | "faq"
  | "feature"
  | "header";

export interface ComponentSections {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  path: string;
  code: string;
  type: ComponentSectionTypes;
}

// Types of components
export const componentSectionTypes: ComponentSectionTypes[] = [
  "all",
  "hero",
  "feature",
  "cta",
  "header",
  "faq",
];
