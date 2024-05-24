import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedTableWithExpandableRows } from "~/components/sections/application-ui/advanced-tables/expandable-rows";

const meta = {
  title: "sections/application-ui/advanced-tables/expandable-rows",
  component: AdvancedTableWithExpandableRows,
} satisfies Meta<typeof AdvancedTableWithExpandableRows>;

export default meta;

type Story = StoryObj<typeof AdvancedTableWithExpandableRows>;

export const Default: Story = {
  render: () => <AdvancedTableWithExpandableRows />,
};
