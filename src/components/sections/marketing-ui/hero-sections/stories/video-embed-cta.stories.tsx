import type { Meta, StoryObj } from "@storybook/react";

import { VideoEmbedWithCTAHero } from "../video-embed-cta";

const meta = {
  title: "sections/marketing-ui/hero-sections/video-embed-cta",
  component: VideoEmbedWithCTAHero,
} satisfies Meta<typeof VideoEmbedWithCTAHero>;

export default meta;

type Story = StoryObj<typeof VideoEmbedWithCTAHero>;

export const Default: Story = {
  render: () => <VideoEmbedWithCTAHero />,
};
