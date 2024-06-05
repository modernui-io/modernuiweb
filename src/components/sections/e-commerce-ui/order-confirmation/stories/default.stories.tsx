import type { Meta, StoryObj } from "@storybook/react";

import { OrderConfirmationDefault } from "../default";

const meta = {
  title: "sections/E commerce UI/order Confirmation/default",
  component: OrderConfirmationDefault,
} satisfies Meta<typeof OrderConfirmationDefault>;

export default meta;

type Story = StoryObj<typeof OrderConfirmationDefault>;

export const Default: Story = {
  render: () => <OrderConfirmationDefault />,
};
