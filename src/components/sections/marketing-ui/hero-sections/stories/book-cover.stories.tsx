import type { Meta, StoryObj } from "@storybook/react";

import { HeroSectionWithBookCover } from "../book-cover";

const meta = {
  title: "sections/marketing-ui/hero-sections/book Cover",
  component: HeroSectionWithBookCover,
} satisfies Meta<typeof HeroSectionWithBookCover>;

export default meta;

type Story = StoryObj<typeof HeroSectionWithBookCover>;

export const Default: Story = {
  render: () => <HeroSectionWithBookCover />,
};
