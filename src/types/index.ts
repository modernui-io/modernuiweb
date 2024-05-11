import type React from "react";

export type ElementProps<
  ElementType extends React.ElementType,
  PropsToOmit extends string = never,
> = Omit<React.ComponentPropsWithoutRef<ElementType>, "style" | PropsToOmit>;
