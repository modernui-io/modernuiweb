import type { Meta, StoryObj } from "@storybook/react";

import { PhoneMockupWithAppDownloadHero } from "../phone-mockup";

const meta = {
  title: "sections/marketing-ui/hero-sections/phone-mockup",
  component: PhoneMockupWithAppDownloadHero,
} satisfies Meta<typeof PhoneMockupWithAppDownloadHero>;

export default meta;

type Story = StoryObj<typeof PhoneMockupWithAppDownloadHero>;

export const Default: Story = {
  render: () => <PhoneMockupWithAppDownloadHero />,
};
