import type { Meta, StoryObj } from "@storybook/react";

import { CoverImageWithCTAsHero } from "../image-cover";

const meta = {
  title: "sections/marketing-ui/hero-sections/image-cover",
  component: CoverImageWithCTAsHero,
} satisfies Meta<typeof CoverImageWithCTAsHero>;

export default meta;

type Story = StoryObj<typeof CoverImageWithCTAsHero>;

export const Default: Story = {
  render: () => <CoverImageWithCTAsHero />,
};
