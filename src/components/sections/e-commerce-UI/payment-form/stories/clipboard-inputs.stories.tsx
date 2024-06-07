import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormClipboard } from "../clipboard-inputs";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with copy clipboard",
  component: PaymentFormClipboard,
} satisfies Meta<typeof PaymentFormClipboard>;

export default meta;

type Story = StoryObj<typeof PaymentFormClipboard>;

export const Default: Story = {
  render: () => <PaymentFormClipboard />,
};
