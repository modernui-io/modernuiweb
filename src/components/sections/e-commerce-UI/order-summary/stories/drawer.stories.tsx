import type { Meta, StoryObj } from "@storybook/react";

import { OrderSummaryWithDrawer } from "../drawer";

const meta = {
  title: "sections/E commerce ui/order summary/order summary with drawer",
  component: OrderSummaryWithDrawer,
} satisfies Meta<typeof OrderSummaryWithDrawer>;

export default meta;

type Story = StoryObj<typeof OrderSummaryWithDrawer>;

export const Default: Story = {
  render: () => <OrderSummaryWithDrawer />,
};
