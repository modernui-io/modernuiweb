import type { Meta, StoryObj } from "@storybook/react";

import { UpdateProductDrawer } from "../update-product-drawer";

const meta = {
  title: "sections/application-ui/update-drawers/Update Product Drawer",
  component: UpdateProductDrawer,
} satisfies Meta<typeof UpdateProductDrawer>;

export default meta;

type Story = StoryObj<typeof UpdateProductDrawer>;

export const Default: Story = {
  render: () => <UpdateProductDrawer />,
};
