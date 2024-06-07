import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingCartTable } from "../table";

const meta = {
  title: "sections/E-commerce UI/shopping cart/Cart with table",
  component: ShoppingCartTable,
} satisfies Meta<typeof ShoppingCartTable>;

export default meta;

type Story = StoryObj<typeof ShoppingCartTable>;

export const Default: Story = {
  render: () => <ShoppingCartTable />,
};
