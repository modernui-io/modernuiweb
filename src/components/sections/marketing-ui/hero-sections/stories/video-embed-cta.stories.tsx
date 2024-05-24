import type { Meta, StoryObj } from "@storybook/react";

import { VideoEmbedWithCTAHero } from "../video-embed-cta";

const meta = {
  title: "sections/marketing-ui/hero-sections/Video Embed CTA",
  component: VideoEmbedWithCTAHero,
} satisfies Meta<typeof VideoEmbedWithCTAHero>;

export default meta;

type Story = StoryObj<typeof VideoEmbedWithCTAHero>;

export const Default: Story = {
  render: () => <VideoEmbedWithCTAHero />,
};
