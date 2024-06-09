import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormDefault } from "../default";

const meta = {
  title: "sections/E-commerce UI/Payment form/default",
  component: PaymentFormDefault,
} satisfies Meta<typeof PaymentFormDefault>;

export default meta;

type Story = StoryObj<typeof PaymentFormDefault>;

export const Default: Story = {
  render: () => <PaymentFormDefault />,
};
