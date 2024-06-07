import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalPricingCards } from "../horizontal-pricing-cards";

const meta = {
  title: "sections/Marketing UI/Pricing Forms/Horizontal Pricing Cards",
  component: HorizontalPricingCards,
} satisfies Meta<typeof HorizontalPricingCards>;

export default meta;

type Story = StoryObj<typeof HorizontalPricingCards>;

export const Default: Story = {
  render: () => <HorizontalPricingCards />,
};
