import { Extension, textInputRule } from "@tiptap/core";
import CharacterCount from "@tiptap/extension-character-count";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TipTapLink from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

import type { RichTextEditorProps } from "./rte";

export const Link = TipTapLink.extend({
  addKeyboardShortcuts: () => ({
    "Mod-k": () => {
      window.dispatchEvent(new Event("edit-link"));
      return true;
    },
  }),
}).configure({ openOnClick: false });

export const SmileyReplacer = Extension.create({
  name: "smileyReplacer",

  addInputRules() {
    return [
      textInputRule({ find: /-___- $/, replace: "😑 " }),
      textInputRule({ find: /:'-\) $/, replace: "😂 " }),
      textInputRule({ find: /':-\) $/, replace: "😅 " }),
      textInputRule({ find: /':-D $/, replace: "😅 " }),
      textInputRule({ find: />:-\) $/, replace: "😆 " }),
      textInputRule({ find: /-__- $/, replace: "😑 " }),
      textInputRule({ find: /':-\( $/, replace: "😓 " }),
      textInputRule({ find: /:'-\( $/, replace: "😢 " }),
      textInputRule({ find: />:-\( $/, replace: "😠 " }),
      textInputRule({ find: /O:-\) $/, replace: "😇 " }),
      textInputRule({ find: /0:-3 $/, replace: "😇 " }),
      textInputRule({ find: /0:-\) $/, replace: "😇 " }),
      textInputRule({ find: /0;\^\) $/, replace: "😇 " }),
      textInputRule({ find: /O;-\) $/, replace: "😇 " }),
      textInputRule({ find: /0;-\) $/, replace: "😇 " }),
      textInputRule({ find: /O:-3 $/, replace: "😇 " }),
      textInputRule({ find: /:'\) $/, replace: "😂 " }),
      textInputRule({ find: /:-D $/, replace: "😃 " }),
      textInputRule({ find: /':\) $/, replace: "😅 " }),
      textInputRule({ find: /'=\) $/, replace: "😅 " }),
      textInputRule({ find: /':D $/, replace: "😅 " }),
      textInputRule({ find: /'=D $/, replace: "😅 " }),
      textInputRule({ find: />:\) $/, replace: "😆 " }),
      textInputRule({ find: />;\) $/, replace: "😆 " }),
      textInputRule({ find: />=\) $/, replace: "😆 " }),
      textInputRule({ find: /;-\) $/, replace: "😉 " }),
      textInputRule({ find: /\*-\) $/, replace: "😉 " }),
      textInputRule({ find: /;-\] $/, replace: "😉 " }),
      textInputRule({ find: /;\^\) $/, replace: "😉 " }),
      textInputRule({ find: /B-\) $/, replace: "😎 " }),
      textInputRule({ find: /8-\) $/, replace: "😎 " }),
      textInputRule({ find: /B-D $/, replace: "😎 " }),
      textInputRule({ find: /8-D $/, replace: "😎 " }),
      textInputRule({ find: /:-\* $/, replace: "😘 " }),
      textInputRule({ find: /:\^\* $/, replace: "😘 " }),
      textInputRule({ find: /:-\) $/, replace: "🙂 " }),
      textInputRule({ find: /-_- $/, replace: "😑 " }),
      textInputRule({ find: /:-X $/, replace: "😶 " }),
      textInputRule({ find: /:-# $/, replace: "😶 " }),
      textInputRule({ find: /:-x $/, replace: "😶 " }),
      textInputRule({ find: />.< $/, replace: "😣 " }),
      textInputRule({ find: /:-O $/, replace: "😮 " }),
      textInputRule({ find: /:-o $/, replace: "😮 " }),
      textInputRule({ find: /O_O $/, replace: "😮 " }),
      textInputRule({ find: />:O $/, replace: "😮 " }),
      textInputRule({ find: /:-P $/, replace: "😛 " }),
      textInputRule({ find: /:-p $/, replace: "😛 " }),
      textInputRule({ find: /:-Þ $/, replace: "😛 " }),
      textInputRule({ find: /:-þ $/, replace: "😛 " }),
      textInputRule({ find: /:-b $/, replace: "😛 " }),
      textInputRule({ find: />:P $/, replace: "😜 " }),
      textInputRule({ find: /X-P $/, replace: "😜 " }),
      textInputRule({ find: /x-p $/, replace: "😜 " }),
      textInputRule({ find: /':\( $/, replace: "😓 " }),
      textInputRule({ find: /'=\( $/, replace: "😓 " }),
      textInputRule({ find: />:\\ $/, replace: "😕 " }),
      textInputRule({ find: />:\/ $/, replace: "😕 " }),
      textInputRule({ find: /:-\/ $/, replace: "😕 " }),
      textInputRule({ find: /:-. $/, replace: "😕 " }),
      textInputRule({ find: />:\[ $/, replace: "😞 " }),
      textInputRule({ find: /:-\( $/, replace: "😞 " }),
      textInputRule({ find: /:-\[ $/, replace: "😞 " }),
      textInputRule({ find: /:'\( $/, replace: "😢 " }),
      textInputRule({ find: /;-\( $/, replace: "😢 " }),
      textInputRule({ find: /#-\) $/, replace: "😵 " }),
      textInputRule({ find: /%-\) $/, replace: "😵 " }),
      textInputRule({ find: /X-\) $/, replace: "😵 " }),
      textInputRule({ find: />:\( $/, replace: "😠 " }),
      textInputRule({ find: /0:3 $/, replace: "😇 " }),
      textInputRule({ find: /0:\) $/, replace: "😇 " }),
      textInputRule({ find: /O:\) $/, replace: "😇 " }),
      textInputRule({ find: /O=\) $/, replace: "😇 " }),
      textInputRule({ find: /O:3 $/, replace: "😇 " }),
      textInputRule({ find: /<\/3 $/, replace: "💔 " }),
      textInputRule({ find: /:D $/, replace: "😃 " }),
      textInputRule({ find: /=D $/, replace: "😃 " }),
      textInputRule({ find: /;\) $/, replace: "😉 " }),
      textInputRule({ find: /\*\) $/, replace: "😉 " }),
      textInputRule({ find: /;\] $/, replace: "😉 " }),
      textInputRule({ find: /;D $/, replace: "😉 " }),
      textInputRule({ find: /B\) $/, replace: "😎 " }),
      textInputRule({ find: /8\) $/, replace: "😎 " }),
      textInputRule({ find: /:\* $/, replace: "😘 " }),
      textInputRule({ find: /=\* $/, replace: "😘 " }),
      textInputRule({ find: /:\) $/, replace: "🙂 " }),
      textInputRule({ find: /=\] $/, replace: "🙂 " }),
      textInputRule({ find: /=\) $/, replace: "🙂 " }),
      textInputRule({ find: /:\] $/, replace: "🙂 " }),
      textInputRule({ find: /:X $/, replace: "😶 " }),
      textInputRule({ find: /:# $/, replace: "😶 " }),
      textInputRule({ find: /=X $/, replace: "😶 " }),
      textInputRule({ find: /=x $/, replace: "😶 " }),
      textInputRule({ find: /:x $/, replace: "😶 " }),
      textInputRule({ find: /=# $/, replace: "😶 " }),
      textInputRule({ find: /:O $/, replace: "😮 " }),
      textInputRule({ find: /:o $/, replace: "😮 " }),
      textInputRule({ find: /:P $/, replace: "😛 " }),
      textInputRule({ find: /=P $/, replace: "😛 " }),
      textInputRule({ find: /:p $/, replace: "😛  " }),
      textInputRule({ find: /=p $/, replace: "😛 " }),
      textInputRule({ find: /:Þ $/, replace: "😛 " }),
      textInputRule({ find: /:þ $/, replace: "😛 " }),
      textInputRule({ find: /:b $/, replace: "😛 " }),
      textInputRule({ find: /d: $/, replace: "😛 " }),
      textInputRule({ find: /:\/ $/, replace: "😕 " }),
      textInputRule({ find: /:\\ $/, replace: "😕 " }),
      textInputRule({ find: /=\/ $/, replace: "😕 " }),
      textInputRule({ find: /=\\ $/, replace: "😕 " }),
      textInputRule({ find: /:L $/, replace: "😕 " }),
      textInputRule({ find: /=L $/, replace: "😕 " }),
      textInputRule({ find: /:\( $/, replace: "😞 " }),
      textInputRule({ find: /:\[ $/, replace: "😞 " }),
      textInputRule({ find: /=\( $/, replace: "😞 " }),
      textInputRule({ find: /;\( $/, replace: "😢 " }),
      textInputRule({ find: /D: $/, replace: "😨 " }),
      textInputRule({ find: /:\$ $/, replace: "😳 " }),
      textInputRule({ find: /=\$ $/, replace: "😳 " }),
      textInputRule({ find: /#\) $/, replace: "😵 " }),
      textInputRule({ find: /%\) $/, replace: "😵 " }),
      textInputRule({ find: /X\) $/, replace: "😵 " }),
      textInputRule({ find: /:@ $/, replace: "😠 " }),
      textInputRule({ find: /<3 $/, replace: "❤️ " }),
      textInputRule({ find: /\/shrug $/, replace: "¯\\_(ツ)_/¯" }),
    ];
  },
});

export const getExtensions = ({
  placeholder,
  wordLimit,
}: RichTextEditorProps) => {
  return [
    StarterKit,
    Link.configure({
      openOnClick: true,
      validate(url) {
        return /^https?:\/\//.test(url);
      },
    }),
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return `Heading ${node.attrs.level}`;
        }
        return placeholder ?? "What's on your mind?";
      },
      includeChildren: true,
    }),
    Underline,
    Color,
    Highlight.configure({ multicolor: true }),
    Typography,
    SmileyReplacer,
    CharacterCount.configure(
      wordLimit
        ? {
            limit: wordLimit,
          }
        : undefined,
    ),
  ];
};
