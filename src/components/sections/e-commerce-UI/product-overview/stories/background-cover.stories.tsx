import type { Meta, StoryObj } from "@storybook/react";

import { ProductDetailBackgroundCover } from "../background-cover";

const meta = {
  title:
    "sections/E-Commerce UI/Product Overview/Product section with background cover",
  component: ProductDetailBackgroundCover,
} satisfies Meta<typeof ProductDetailBackgroundCover>;

export default meta;

type Story = StoryObj<typeof ProductDetailBackgroundCover>;

export const Default: Story = {
  render: () => <ProductDetailBackgroundCover />,
};
