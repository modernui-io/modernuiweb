import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormDrawer } from "../drawer";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with drawer",
  component: PaymentFormDrawer,
} satisfies Meta<typeof PaymentFormDrawer>;

export default meta;

type Story = StoryObj<typeof PaymentFormDrawer>;

export const Default: Story = {
  render: () => <PaymentFormDrawer />,
};
