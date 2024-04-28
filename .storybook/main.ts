// import { resolve } from "node:path";

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    // disableTelemetry: true,
    enableCrashReports: true,
  },
  docs: {
    autodocs: "tag",
  },
  // staticDirs: [resolve(__dirname, "../", "public")],
  staticDirs: ["../public"],
};
export default config;
