import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedTableWithSortableRows } from "~/components/sections/application-ui/advanced-tables/sortable-rows";

const meta = {
  title: "sections/application-ui/advanced-tables/sortable-rows",
  component: AdvancedTableWithSortableRows,
} satisfies Meta<typeof AdvancedTableWithSortableRows>;

export default meta;

type Story = StoryObj<typeof AdvancedTableWithSortableRows>;

export const Default: Story = {
  render: () => <AdvancedTableWithSortableRows />,
};
