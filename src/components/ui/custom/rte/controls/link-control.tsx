import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import { ResponsiveTooltip } from "~/components/ui/custom/responsive-tooltip";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useDisclosure } from "~/lib/hooks/use-disclosure";
import { useInputState } from "~/lib/hooks/use-input-state";
import { useWindowEvent } from "~/lib/hooks/use-window-event";
import { cn } from "~/lib/utils";
import type { ElementProps } from "~/types";

import { IconExternalLink, IconLink } from "../icons";
import { useRichTextEditorContext } from "../rte-context";
import {
  RichTextEditorControlBase,
  type RichTextEditorControlBaseProps,
} from "./rte-control";

export interface RichTextEditorLinkControlProps extends ElementProps<"button"> {
  icon?: React.FC<{ style: React.CSSProperties }>;
  initialExternal?: boolean;
}

const LinkIcon: RichTextEditorControlBaseProps["icon"] = (props) => (
  <IconLink {...props} />
);

export const RichTextEditorLinkControl = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & RichTextEditorLinkControlProps
>((props, ref) => {
  const { className, style, icon, initialExternal, ...others } = props;
  const ctx = useRichTextEditorContext();

  const [url, setUrl] = useInputState("");
  const [external, setExternal] = useState(initialExternal);
  const [opened, { open, close }] = useDisclosure(false);

  const handleOpen = () => {
    open();
    const linkData = ctx.editor?.getAttributes("link");
    setUrl(linkData?.href || "");
    setExternal(
      linkData?.href ? linkData?.target === "_blank" : initialExternal,
    );
  };

  const handleClose = () => {
    close();
    setUrl("");
    setExternal(initialExternal);
  };

  const setLink = () => {
    handleClose();
    url === ""
      ? ctx.editor?.chain().focus().extendMarkRange("link").unsetLink().run()
      : ctx.editor
          ?.chain()
          .focus()
          .extendMarkRange("link")
          .setLink({ href: url, target: external ? "_blank" : null })
          .run();
  };

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setLink();
    }
  };

  useWindowEvent("edit-link", handleOpen, false);

  return (
    <Popover
      open={opened}
      onOpenChange={() => {
        if (!opened) {
          handleOpen();
        } else {
          handleClose();
        }
      }}
    >
      <PopoverTrigger asChild>
        <RichTextEditorControlBase
          icon={icon ?? LinkIcon}
          aria-label={ctx.labels.linkControlLabel}
          title={ctx.labels.linkControlLabel}
          onClick={handleOpen}
          active={ctx.editor?.isActive("link")}
          ref={ref}
          className={cn(ctx.classNames?.control, className)}
        />
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-64 p-0", ctx.classNames?.linkEditorDropdown)}
      >
        <div className={ctx.classNames?.linkEditor}>
          <Input
            placeholder={ctx.labels.linkEditorInputPlaceholder}
            aria-label={ctx.labels.linkEditorInputLabel}
            type="url"
            value={url}
            onChange={setUrl}
            onKeyDown={handleInputKeydown}
            className={ctx.classNames?.linkEditorInput}
            rightSection={
              <ResponsiveTooltip
                content={
                  external
                    ? ctx.labels.linkEditorExternalLink
                    : ctx.labels.linkEditorInternalLink
                }
              >
                <Button
                  onClick={() => setExternal((e) => !e)}
                  data-active={external ?? undefined}
                  size="icon"
                  className={ctx.classNames?.linkEditorExternalControl}
                >
                  <IconExternalLink
                    style={{ width: ".9rem", height: ".8rem" }}
                  />
                </Button>
              </ResponsiveTooltip>
            }
          />
          <Button
            variant="default"
            onClick={setLink}
            className={ctx.classNames?.linkEditorSave}
          >
            {ctx.labels.linkEditorSave}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
});

RichTextEditorLinkControl.displayName = "RichTextEditorLinkControl";
