import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormOptions } from "../options";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with options",
  component: PaymentFormOptions,
} satisfies Meta<typeof PaymentFormOptions>;

export default meta;

type Story = StoryObj<typeof PaymentFormOptions>;

export const Default: Story = {
  render: () => <PaymentFormOptions />,
};
