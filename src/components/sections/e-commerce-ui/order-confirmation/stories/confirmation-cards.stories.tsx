import type { Meta, StoryObj } from "@storybook/react";

import { OrderConfirmationCards } from "../confirmation-cards";

const meta = {
  title: "sections/E commerce UI/order Confirmation/Confirmation with cards",
  component: OrderConfirmationCards,
} satisfies Meta<typeof OrderConfirmationCards>;

export default meta;

type Story = StoryObj<typeof OrderConfirmationCards>;

export const Default: Story = {
  render: () => <OrderConfirmationCards />,
};
