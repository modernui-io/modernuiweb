import type { Meta, StoryObj } from "@storybook/react";

import { InformationalCTAWithAppScreenshotHero } from "../cta-screenshot-download";

const meta = {
  title: "sections/marketing-ui/hero-sections/cta-screenshot-download",
  component: InformationalCTAWithAppScreenshotHero,
} satisfies Meta<typeof InformationalCTAWithAppScreenshotHero>;

export default meta;

type Story = StoryObj<typeof InformationalCTAWithAppScreenshotHero>;

export const Default: Story = {
  render: () => <InformationalCTAWithAppScreenshotHero />,
};
