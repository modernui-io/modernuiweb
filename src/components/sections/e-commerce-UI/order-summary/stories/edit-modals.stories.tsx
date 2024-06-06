import type { Meta, StoryObj } from "@storybook/react";

import { OrderSummaryWithEditModals } from "../edit-modals";

const meta = {
  title: "sections/E commerce ui/order summary/order summary with edit modals",
  component: OrderSummaryWithEditModals,
} satisfies Meta<typeof OrderSummaryWithEditModals>;

export default meta;

type Story = StoryObj<typeof OrderSummaryWithEditModals>;

export const Default: Story = {
  render: () => <OrderSummaryWithEditModals />,
};
