import type { Meta, StoryObj } from "@storybook/react";

import { CRUDLayoutForProductManagement } from "~/components/sections/application-ui/crud-layouts/product-management";

const meta = {
  title: "sections/application-ui/crud-layouts/product-management",
  component: CRUDLayoutForProductManagement,
} satisfies Meta<typeof CRUDLayoutForProductManagement>;

export default meta;

type Story = StoryObj<typeof CRUDLayoutForProductManagement>;

export const Default: Story = {
  render: () => <CRUDLayoutForProductManagement />,
};
