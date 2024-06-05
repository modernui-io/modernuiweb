import type { Meta, StoryObj } from "@storybook/react";

import { OrderConfirmationDrawer } from "../confirmation-drawer";

const meta = {
  title: "sections/E commerce UI/order Confirmation/confirmation with drawer",
  component: OrderConfirmationDrawer,
} satisfies Meta<typeof OrderConfirmationDrawer>;

export default meta;

type Story = StoryObj<typeof OrderConfirmationDrawer>;

export const Default: Story = {
  render: () => <OrderConfirmationDrawer />,
};
