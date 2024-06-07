import type { Meta, StoryObj } from "@storybook/react";

import { HighlightedPricingPlan } from "../highlighted-pricing-plan";

const meta = {
  title: "sections/Marketing UI/Pricing Forms/Highlighted Pricing Plan",
  component: HighlightedPricingPlan,
} satisfies Meta<typeof HighlightedPricingPlan>;

export default meta;

type Story = StoryObj<typeof HighlightedPricingPlan>;

export const Default: Story = {
  render: () => <HighlightedPricingPlan />,
};
