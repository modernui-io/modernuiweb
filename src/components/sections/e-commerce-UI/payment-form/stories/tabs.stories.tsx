import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormTabs } from "../tabs";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with tabs",
  component: PaymentFormTabs,
} satisfies Meta<typeof PaymentFormTabs>;

export default meta;

type Story = StoryObj<typeof PaymentFormTabs>;

export const Default: Story = {
  render: () => <PaymentFormTabs />,
};
