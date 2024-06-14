import type { Meta, StoryObj } from "@storybook/react";

import { OrdersOverviewSiderbar } from "../sidebar";

const meta = {
  title: "sections/E-commerce-UI/Order Overview/sidebar",
  component: OrdersOverviewSiderbar,
} satisfies Meta<typeof OrdersOverviewSiderbar>;

export default meta;

type Story = StoryObj<typeof OrdersOverviewSiderbar>;

export const Default: Story = {
  render: () => <OrdersOverviewSiderbar />,
};
