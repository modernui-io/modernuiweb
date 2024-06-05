import type { Meta, StoryObj } from "@storybook/react";

import { ProductInfoTabs } from "../tabs";

const meta = {
  title: "sections/Ecommerce-UI/Product Information/tabs",
  component: ProductInfoTabs,
} satisfies Meta<typeof ProductInfoTabs>;

export default meta;

type Story = StoryObj<typeof ProductInfoTabs>;

export const Default: Story = {
  render: () => <ProductInfoTabs />,
};
