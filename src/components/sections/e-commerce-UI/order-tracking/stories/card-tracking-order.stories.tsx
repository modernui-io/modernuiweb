import type { Meta, StoryObj } from "@storybook/react";

import CardOrderTracking from "../card-tracking-order";

const meta = {
  title: "sections/E-commerce UI/Order Tracking/Order tracking with cards",
  component: CardOrderTracking,
} satisfies Meta<typeof CardOrderTracking>;

export default meta;

type Story = StoryObj<typeof CardOrderTracking>;

export const Default: Story = {
  render: () => <CardOrderTracking />,
};
