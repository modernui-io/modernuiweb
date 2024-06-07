import type { Meta, StoryObj } from "@storybook/react";

import { DefaultPricingCards } from "../default-pricing-cards";

const meta = {
  title: "sections/Marketing UI/Pricing Forms/Default Pricing Cards",
  component: DefaultPricingCards,
} satisfies Meta<typeof DefaultPricingCards>;

export default meta;

type Story = StoryObj<typeof DefaultPricingCards>;

export const Default: Story = {
  render: () => <DefaultPricingCards />,
};
