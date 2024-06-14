import type { Meta, StoryObj } from "@storybook/react";

import DefaultOrderTracking from "../default-order";

const meta = {
  title: "sections/E-commerce UI/Order Tracking/Default order tracking",
  component: DefaultOrderTracking,
} satisfies Meta<typeof DefaultOrderTracking>;

export default meta;

type Story = StoryObj<typeof DefaultOrderTracking>;

export const Default: Story = {
  render: () => <DefaultOrderTracking />,
};
