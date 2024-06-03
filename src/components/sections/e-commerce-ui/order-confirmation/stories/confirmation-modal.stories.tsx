import type { Meta, StoryObj } from "@storybook/react";

import { OrderConfirmationModal } from "../confirmation-modal";

const meta = {
  title: "sections/E commerce UI/order Confirmation/confirmation with Modal",
  component: OrderConfirmationModal,
} satisfies Meta<typeof OrderConfirmationModal>;

export default meta;

type Story = StoryObj<typeof OrderConfirmationModal>;

export const Default: Story = {
  render: () => <OrderConfirmationModal />,
};
