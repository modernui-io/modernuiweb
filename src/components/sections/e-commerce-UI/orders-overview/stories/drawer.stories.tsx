import type { Meta, StoryObj } from "@storybook/react";

import { OrderOverviewDrawer } from "../drawer";

const meta = {
  title: "sections/E-commerce-UI/Order Overview/drawer",
  component: OrderOverviewDrawer,
} satisfies Meta<typeof OrderOverviewDrawer>;

export default meta;

type Story = StoryObj<typeof OrderOverviewDrawer>;

export const Default: Story = {
  render: () => <OrderOverviewDrawer />,
};
