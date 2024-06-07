import type { Meta, StoryObj } from "@storybook/react";

import { OrderSummaryWithModal } from "../modal";

const meta = {
  title: "sections/E commerce ui/order summary/order summary with modal",
  component: OrderSummaryWithModal,
} satisfies Meta<typeof OrderSummaryWithModal>;

export default meta;

type Story = StoryObj<typeof OrderSummaryWithModal>;

export const Default: Story = {
  render: () => <OrderSummaryWithModal />,
};
