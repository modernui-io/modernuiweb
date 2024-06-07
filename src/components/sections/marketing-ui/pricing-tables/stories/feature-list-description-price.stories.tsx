import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListDescriptionPricingCard } from "../feature-list-description-price";

const meta = {
  title:
    "sections/Marketing UI/Pricing Forms/Feature List Description With Pricing Card",
  component: FeatureListDescriptionPricingCard,
} satisfies Meta<typeof FeatureListDescriptionPricingCard>;

export default meta;

type Story = StoryObj<typeof FeatureListDescriptionPricingCard>;

export const Default: Story = {
  render: () => <FeatureListDescriptionPricingCard />,
};
