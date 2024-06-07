import type { Meta, StoryObj } from "@storybook/react";

import { OrderConfirmationSidebar } from "../confirmation-sidebar";

const meta = {
  title: "sections/E commerce UI/order Confirmation/confirmation-sidebar",
  component: OrderConfirmationSidebar,
} satisfies Meta<typeof OrderConfirmationSidebar>;

export default meta;

type Story = StoryObj<typeof OrderConfirmationSidebar>;

export const Default: Story = {
  render: () => <OrderConfirmationSidebar />,
};
