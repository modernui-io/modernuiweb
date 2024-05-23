import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithButtonGroupFiltersAndExport } from "~/components/sections/application-ui/table-headers/button-group-filters";

const meta = {
  title: "sections/application-ui/table-headers/button-group-filters",
  component: TableHeaderWithButtonGroupFiltersAndExport,
} satisfies Meta<typeof TableHeaderWithButtonGroupFiltersAndExport>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithButtonGroupFiltersAndExport>;

export const Default: Story = {
  render: () => <TableHeaderWithButtonGroupFiltersAndExport />,
};
