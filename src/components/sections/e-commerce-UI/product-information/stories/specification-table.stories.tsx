import type { Meta, StoryObj } from "@storybook/react";

import { ProductInformationSpecificationTable } from "../specification-table";

const meta = {
  title: "sections/E-commerce UI/Product Information/specification-table",
  component: ProductInformationSpecificationTable,
} satisfies Meta<typeof ProductInformationSpecificationTable>;

export default meta;

type Story = StoryObj<typeof ProductInformationSpecificationTable>;

export const Default: Story = {
  render: () => <ProductInformationSpecificationTable />,
};
