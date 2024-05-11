/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";

import { cn } from "~/lib/utils";
import type { ElementProps } from "~/types";

import type { RichTextEditorLabels } from "../labels";
import { useRichTextEditorContext } from "../rte-context";

export type RichTextEditorControlStylesNames = "control";

export interface RichTextEditorControlProps extends ElementProps<"button"> {
  /** Determines whether the control should have active state, false by default */
  active?: boolean;

  /** Determines whether the control can be interacted with, set `false` to make the control to act as a label */
  interactive?: boolean;
}

// export interface RichTextEditorControlFactory {
//   props: RichTextEditorControlProps;
//   ref: HTMLButtonElement;
//   stylesNames: RichTextEditorControlStylesNames;
//   compound: true;
// }

export const RichTextEditorControl = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & RichTextEditorControlProps
>((props, ref) => {
  const {
    className,
    style,
    interactive = true,
    active,
    onMouseDown,
    disabled,
    ...others
  } = props;
  const ctx = useRichTextEditorContext();

  return (
    <button
      {...others}
      className={cn(className, ctx.classNames?.control)}
      disabled={disabled}
      data-rich-text-editor-control
      tabIndex={interactive ? 0 : -1}
      data-interactive={interactive || undefined}
      data-disabled={disabled ?? undefined}
      data-active={active ?? undefined}
      aria-pressed={(active && interactive) ?? undefined}
      aria-hidden={!interactive || undefined}
      ref={ref}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
    />
  );
});

RichTextEditorControl.displayName = "RichTextEditorControl";

export interface RichTextEditorControlBaseProps
  extends RichTextEditorControlProps {
  icon?: React.FC<{ style: React.CSSProperties }>;
}

export const RichTextEditorControlBase = forwardRef<
  HTMLButtonElement,
  RichTextEditorControlBaseProps
>(({ className, icon: Icon, ...others }: any, ref) => (
  <RichTextEditorControl ref={ref} {...others}>
    <Icon style={{ width: "1rem", height: "1rem" }} />
  </RichTextEditorControl>
));

RichTextEditorControlBase.displayName = "RichTextEditorControlBase";

export interface CreateControlProps {
  label: keyof RichTextEditorLabels;
  icon: React.FC<{ style: React.CSSProperties }>;
  isActive?: { name: string; attributes?: Record<string, any> | string };

  isDisabled?: (editor: any) => boolean;
  operation: { name: string; attributes?: Record<string, any> | string };
}

export function createControl({
  label,
  isActive,
  operation,
  icon,
  isDisabled,
}: CreateControlProps) {
  // eslint-disable-next-line react/display-name
  return forwardRef<HTMLButtonElement, RichTextEditorControlBaseProps>(
    (props, ref) => {
      const { editor, labels } = useRichTextEditorContext();
      const _label = labels[label] as string;
      return (
        <RichTextEditorControlBase
          {...props}
          aria-label={_label}
          title={_label}
          active={
            isActive?.name
              ? editor?.isActive(isActive.name, isActive.attributes)
              : false
          }
          ref={ref}
          onClick={() =>
            (editor as any)
              ?.chain()
              .focus()
              [operation.name](operation.attributes)
              .run()
          }
          icon={props.icon ?? icon}
          disabled={isDisabled?.(editor) ?? false}
        />
      );
    },
  );
}
