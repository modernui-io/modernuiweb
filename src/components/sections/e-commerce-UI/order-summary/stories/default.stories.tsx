import type { Meta, StoryObj } from "@storybook/react";

import { OrderSummaryDefault } from "../default";

const meta = {
  title: "sections/E commerce ui/order summary/order summary default",
  component: OrderSummaryDefault,
} satisfies Meta<typeof OrderSummaryDefault>;

export default meta;

type Story = StoryObj<typeof OrderSummaryDefault>;

export const Default: Story = {
  render: () => <OrderSummaryDefault />,
};
