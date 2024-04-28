import { create } from "@storybook/theming";

const commonOptions = {
  brandTitle: "ModernUI — Storybook",
  brandUrl: "https://modernui.io/",
  brandTarget: "_blank",
};

export const light = create({
  base: "light",
  brandImage: "https://i.imgur.com/Y8KEnf1.png",
  ...commonOptions,
});

export const dark = create({
  base: "dark",
  brandImage: "https://i.imgur.com/Y8KEnf1.png",
  ...commonOptions,
});
