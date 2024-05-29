import "./preview.css";
import "../src/styles/globals.css";

import { withThemeByClassName } from "@storybook/addon-themes";
// import { withThemeByClassName } from "@storybook/addon-styling";
import { MINIMAL_VIEWPORTS as viewports } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";

import * as themes from "./themes";

// https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "Theme",
      values: [
        {
          name: "Theme",
          value: "var(--storybook-background-color)",
        },
        {
          name: "Light",
          value: "var(--storybook-background-color-light)",
        },
        {
          name: "Dark",
          value: "var(--storybook-background-color-dark)",
        },
      ],
    },
    docs: {
      theme: themes.dark,
    },
    viewport: {
      viewports,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
