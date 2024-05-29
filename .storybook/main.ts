// import { resolve } from "node:path";

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    // "../src/components/ui/stories/**/*.mdx",
    "../src/components/sections/**/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/ui/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/sections/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/ui/custom/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/sections/marketing-ui/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./tokens/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
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
  // previewHead: (head) => `
  //   ${head}
  //   ${
  //     process.env.ANALYTICS_ID ? '<script src="https://cdn.example.com/analytics.js"></script>' : ''
  //   }
  // `,
};
export default config;
