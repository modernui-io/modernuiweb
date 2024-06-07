import type { Meta, StoryObj } from "@storybook/react";

import { TabsSelectorPricingCards } from "../tabs-selector-pricing-cards";

const meta = {
  title: "sections/Marketing UI/Pricing Forms/Tabs Selector Pricing Cards",
  component: TabsSelectorPricingCards,
} satisfies Meta<typeof TabsSelectorPricingCards>;

export default meta;

type Story = StoryObj<typeof TabsSelectorPricingCards>;

export const Default: Story = {
  render: () => <TabsSelectorPricingCards />,
};
