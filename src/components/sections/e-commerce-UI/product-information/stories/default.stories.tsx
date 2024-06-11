import type { Meta, StoryObj } from "@storybook/react";

import { ProductInformationDefault } from "../default";

const meta = {
  title: "sections/E-commerce UI/Product Information/default",
  component: ProductInformationDefault,
} satisfies Meta<typeof ProductInformationDefault>;

export default meta;

type Story = StoryObj<typeof ProductInformationDefault>;

export const Default: Story = {
  render: () => <ProductInformationDefault />,
};
