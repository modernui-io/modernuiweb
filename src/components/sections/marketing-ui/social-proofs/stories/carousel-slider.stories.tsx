import type { Meta, StoryObj } from "@storybook/react";

import { CarouselSlider } from "../carousel-slider";

const meta = {
  title: "sections/Marketing UI/Social Proofs/Carousel Slider",
  component: CarouselSlider,
} satisfies Meta<typeof CarouselSlider>;

export default meta;

type Story = StoryObj<typeof CarouselSlider>;

export const Default: Story = {
  render: () => <CarouselSlider />,
};
