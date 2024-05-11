"use client";

import Picker from "@emoji-mart/react";
import type { Emoji } from "emoji-mart";
import { useTheme } from "next-themes";
import { BsEmojiSmile } from "react-icons/bs";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useDisclosure } from "~/lib/hooks/use-disclosure";

import { useRichTextEditorContext } from "../rte-context";
import { RichTextEditorControl } from "./rte-control";

// import 'emoji-mart/css/emoji-mart.css'

export function EmojiControl({
  controlClassName = "",
  iconClassName = "",
}: {
  controlClassName?: string;
  iconClassName?: string;
}) {
  const { editor } = useRichTextEditorContext();
  const [opened, { close, toggle }] = useDisclosure(false);
  const { resolvedTheme = "light" } = useTheme();

  const handleEmojiSelect = (
    emoji: Emoji & {
      native?: string;
    },
  ) => {
    // console.log(emoji);
    if (editor && emoji.native) {
      editor?.chain().focus().insertContent(emoji.native).run();
    }
    close();
  };

  return (
    <Popover open={opened} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <RichTextEditorControl
          onClick={toggle}
          aria-label="Emoji Picker"
          title="Emoji Picker"
          className={controlClassName}
        >
          <BsEmojiSmile className={iconClassName} />
        </RichTextEditorControl>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <Picker
          data={async () => {
            const response = await fetch(
              "https://cdn.jsdelivr.net/npm/@emoji-mart/data",
              {
                cache: "force-cache",
              },
            );
            return response.json();
          }}
          onEmojiSelect={handleEmojiSelect}
          theme={resolvedTheme === "dark" ? "dark" : "light"}
          categories={["people", "foods", "activity", "objects"]}
          // previewPosition="none"
          // perLine={6}
          // previewPosition="none"
          // searchPosition="none"
          // dynamicWidth
        />
      </PopoverContent>
    </Popover>
  );
}
