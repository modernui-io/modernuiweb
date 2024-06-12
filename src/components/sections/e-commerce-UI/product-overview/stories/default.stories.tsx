import type { Meta, StoryObj } from "@storybook/react";

import ProductDetail from "../default";

const meta = {
  title: "sections/E-Commerce UI/Product Overview/Default product section",
  component: ProductDetail,
} satisfies Meta<typeof ProductDetail>;

export default meta;

type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  render: () => <ProductDetail />,
};
