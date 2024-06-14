import type { Meta, StoryObj } from "@storybook/react";

import { CreateProductDrawer } from "../create-product-drawer";

const meta = {
  title: "sections/application-ui/create-drawers/Create Product Drawer",
  component: CreateProductDrawer,
} satisfies Meta<typeof CreateProductDrawer>;

export default meta;

type Story = StoryObj<typeof CreateProductDrawer>;

export const Default: Story = {
  render: () => <CreateProductDrawer />,
};
