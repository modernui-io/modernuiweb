import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormWireTransfer } from "../wire-transfer";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with wire transfer",
  component: PaymentFormWireTransfer,
} satisfies Meta<typeof PaymentFormWireTransfer>;

export default meta;

type Story = StoryObj<typeof PaymentFormWireTransfer>;

export const Default: Story = {
  render: () => <PaymentFormWireTransfer />,
};
