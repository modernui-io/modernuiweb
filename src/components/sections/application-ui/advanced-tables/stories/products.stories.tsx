import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedTableWithProducts } from "~/components/sections/application-ui/advanced-tables/products";

const meta = {
  title: "sections/application-ui/advanced-tables/products",
  component: AdvancedTableWithProducts,
} satisfies Meta<typeof AdvancedTableWithProducts>;

export default meta;

type Story = StoryObj<typeof AdvancedTableWithProducts>;

export const Default: Story = {
  render: () => <AdvancedTableWithProducts />,
};
