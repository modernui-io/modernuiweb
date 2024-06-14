import type { Meta, StoryObj } from "@storybook/react";

import DrawerOrderTracking from "../drawer-tracking-order";

const meta = {
  title: "sections/E-commerce UI/Order Tracking/Order tracking with drawer",
  component: DrawerOrderTracking,
} satisfies Meta<typeof DrawerOrderTracking>;

export default meta;

type Story = StoryObj<typeof DrawerOrderTracking>;

export const Default: Story = {
  render: () => <DrawerOrderTracking />,
};
