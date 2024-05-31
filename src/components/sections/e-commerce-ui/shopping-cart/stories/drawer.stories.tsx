import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingCartDrawer } from "../drawer";

const meta = {
  title: "sections/E-commerce UI/shopping cart/Cart with drawer",
  component: ShoppingCartDrawer,
} satisfies Meta<typeof ShoppingCartDrawer>;

export default meta;

type Story = StoryObj<typeof ShoppingCartDrawer>;

export const Default: Story = {
  render: () => <ShoppingCartDrawer />,
};
