import type { Meta, StoryObj } from "@storybook/react";

import { OrdersOverviewDefaults } from "../default";

const meta = {
  title: "sections/E-commerce-UI/Order Overview/default",
  component: OrdersOverviewDefaults,
} satisfies Meta<typeof OrdersOverviewDefaults>;

export default meta;

type Story = StoryObj<typeof OrdersOverviewDefaults>;

export const Default: Story = {
  render: () => <OrdersOverviewDefaults />,
};
