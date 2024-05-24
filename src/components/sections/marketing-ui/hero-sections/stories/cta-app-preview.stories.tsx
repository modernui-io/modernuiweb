import type { Meta, StoryObj } from "@storybook/react";

import { AppScreenshotWithCTAsHero } from "../cta-app-preview";

const meta = {
  title: "sections/marketing-ui/hero-sections/CTA App Preview",
  component: AppScreenshotWithCTAsHero,
} satisfies Meta<typeof AppScreenshotWithCTAsHero>;

export default meta;

type Story = StoryObj<typeof AppScreenshotWithCTAsHero>;

export const Default: Story = {
  render: () => <AppScreenshotWithCTAsHero />,
};
