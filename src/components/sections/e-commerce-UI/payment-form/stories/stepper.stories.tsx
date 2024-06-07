import type { Meta, StoryObj } from "@storybook/react";

import { PaymentFormStepper } from "../stepper";

const meta = {
  title: "sections/E-commerce UI/Payment form/payment form with stepper",
  component: PaymentFormStepper,
} satisfies Meta<typeof PaymentFormStepper>;

export default meta;

type Story = StoryObj<typeof PaymentFormStepper>;

export const Default: Story = {
  render: () => <PaymentFormStepper />,
};
