import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithTooltipAndSelectFilters } from "~/components/sections/application-ui/table-headers/tooltip-select-filters";

const meta = {
  title: "sections/application-ui/table-headers/tooltip-select-filters",
  component: TableHeaderWithTooltipAndSelectFilters,
} satisfies Meta<typeof TableHeaderWithTooltipAndSelectFilters>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithTooltipAndSelectFilters>;

export const Default: Story = {
  render: () => <TableHeaderWithTooltipAndSelectFilters />,
};
