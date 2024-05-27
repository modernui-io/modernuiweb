import type { Meta, StoryObj } from "@storybook/react";

import TrendingArticlesCarousel from "../carousel-card";

const meta = {
  title: "sections/Publisher UI/Related Article/Carousel slider cards",
  component: TrendingArticlesCarousel,
} satisfies Meta<typeof TrendingArticlesCarousel>;

export default meta;

type Story = StoryObj<typeof TrendingArticlesCarousel>;

export const Default: Story = {
  render: () => <TrendingArticlesCarousel />,
};
