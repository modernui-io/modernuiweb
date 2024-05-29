import type { Meta, StoryObj } from "@storybook/react";

import { VisualImageWithHeadingHero } from "../video-image-heading";

const meta = {
  title: "sections/marketing-ui/hero-sections/Video Image Heading",
  component: VisualImageWithHeadingHero,
} satisfies Meta<typeof VisualImageWithHeadingHero>;

export default meta;

type Story = StoryObj<typeof VisualImageWithHeadingHero>;

export const Default: Story = {
  render: () => <VisualImageWithHeadingHero />,
};
