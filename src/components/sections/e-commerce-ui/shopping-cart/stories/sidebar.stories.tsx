import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingCartSideBar } from "../sidebar";

const meta = {
  title: "sections/E-commerce UI/shopping cart/Cart with sidebar",
  component: ShoppingCartSideBar,
} satisfies Meta<typeof ShoppingCartSideBar>;

export default meta;

type Story = StoryObj<typeof ShoppingCartSideBar>;

export const Default: Story = {
  render: () => <ShoppingCartSideBar />,
};
