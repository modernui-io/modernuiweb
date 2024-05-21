// import { resolve } from "node:path";

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    // "../src/components/ui/stories/**/*.mdx",
    "../src/components/sections/marketing-ui/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/ui/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/ui/custom/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./tokens/**/*.stories.@(js|jsx|ts|tsx)",
  ],
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
    disableTelemetry: true,
    enableCrashReports: false,
  },
  docs: {
    autodocs: "tag",
  },
  // staticDirs: [resolve(__dirname, "../", "public")],
  // staticDirs: ["../public"],
};
export default config;
