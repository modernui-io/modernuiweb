import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingCartModal } from "../modal";

const meta = {
  title: "sections/E-commerce UI/shopping cart/Cart with Modal",
  component: ShoppingCartModal,
} satisfies Meta<typeof ShoppingCartModal>;

export default meta;

type Story = StoryObj<typeof ShoppingCartModal>;

export const Default: Story = {
  render: () => <ShoppingCartModal />,
};
