import type { Meta, StoryObj } from "@storybook/react";

import { OrderSummaryWithSiderbarStepper } from "../stepper-sidebar";

const meta = {
  title:
    "sections/E commerce ui/order summary/order summary with stepper and sidebar",
  component: OrderSummaryWithSiderbarStepper,
} satisfies Meta<typeof OrderSummaryWithSiderbarStepper>;

export default meta;

type Story = StoryObj<typeof OrderSummaryWithSiderbarStepper>;

export const Default: Story = {
  render: () => <OrderSummaryWithSiderbarStepper />,
};
