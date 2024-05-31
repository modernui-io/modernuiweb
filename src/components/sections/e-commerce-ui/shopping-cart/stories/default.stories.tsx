import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingCartDefault } from "../default";

const meta = {
  title: "sections/E-commerce UI/shopping cart/default",
  component: ShoppingCartDefault,
} satisfies Meta<typeof ShoppingCartDefault>;

export default meta;

type Story = StoryObj<typeof ShoppingCartDefault>;

export const Default: Story = {
  render: () => <ShoppingCartDefault />,
};
