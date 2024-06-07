import type { Meta, StoryObj } from "@storybook/react";

import { PricingPlanWithToggleSwitch } from "../pricing-plan-with-toggle-switch";

const meta = {
  title: "sections/Marketing UI/Pricing Forms/Pricing Plan With Toggle Switch",
  component: PricingPlanWithToggleSwitch,
} satisfies Meta<typeof PricingPlanWithToggleSwitch>;

export default meta;

type Story = StoryObj<typeof PricingPlanWithToggleSwitch>;

export const Default: Story = {
  render: () => <PricingPlanWithToggleSwitch />,
};
