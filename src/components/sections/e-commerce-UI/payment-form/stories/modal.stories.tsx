import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormModal } from "../modal";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with modal",
  component: PaymentFormModal,
} satisfies Meta<typeof PaymentFormModal>;

export default meta;

type Story = StoryObj<typeof PaymentFormModal>;

export const Default: Story = {
  render: () => <PaymentFormModal />,
};
