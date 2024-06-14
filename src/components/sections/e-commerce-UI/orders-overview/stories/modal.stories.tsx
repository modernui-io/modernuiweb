import type { Meta, StoryObj } from "@storybook/react";

import { OrderOverviewModal } from "../modal";

const meta = {
  title: "sections/E-commerce-UI/Order Overview/modal",
  component: OrderOverviewModal,
} satisfies Meta<typeof OrderOverviewModal>;

export default meta;

type Story = StoryObj<typeof OrderOverviewModal>;

export const Default: Story = {
  render: () => <OrderOverviewModal />,
};
