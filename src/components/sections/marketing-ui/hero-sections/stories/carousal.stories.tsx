import type { Meta, StoryObj } from "@storybook/react";

import { HeroSectionWithCarouselSlider } from "../carousel";

const meta = {
  title: "sections/marketing-ui/hero-sections/Carousal",
  component: HeroSectionWithCarouselSlider,
} satisfies Meta<typeof HeroSectionWithCarouselSlider>;

export default meta;

type Story = StoryObj<typeof HeroSectionWithCarouselSlider>;

export const Default: Story = {
  render: () => <HeroSectionWithCarouselSlider />,
};
