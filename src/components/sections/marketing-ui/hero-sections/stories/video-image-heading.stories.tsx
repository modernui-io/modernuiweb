import type { Meta, StoryObj } from "@storybook/react";

import { VisualImageWithHeadingHero } from "../video-image-heading";

const meta = {
  title: "sections/marketing-ui/hero-sections/video-image-heading",
  component: VisualImageWithHeadingHero,
} satisfies Meta<typeof VisualImageWithHeadingHero>;

export default meta;

type Story = StoryObj<typeof VisualImageWithHeadingHero>;

export const Default: Story = {
  render: () => <VisualImageWithHeadingHero />,
};
