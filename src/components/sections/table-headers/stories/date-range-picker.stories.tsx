import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithDateRangePickerFilter } from "~/components/sections/table-headers/date-range-picker";

const meta = {
  title: "sections/table-headers/date-range-picker",
  component: TableHeaderWithDateRangePickerFilter,
} satisfies Meta<typeof TableHeaderWithDateRangePickerFilter>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithDateRangePickerFilter>;

export const Default: Story = {
  render: () => <TableHeaderWithDateRangePickerFilter />,
};
