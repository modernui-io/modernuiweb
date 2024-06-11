import type { Meta, StoryObj } from "@storybook/react";

import { OrdersOverviewList } from "../table";

const meta = {
  title: "sections/E-commerce-UI/Order Overview/table",
  component: OrdersOverviewList,
} satisfies Meta<typeof OrdersOverviewList>;

export default meta;

type Story = StoryObj<typeof OrdersOverviewList>;

export const Default: Story = {
  render: () => <OrdersOverviewList />,
};
