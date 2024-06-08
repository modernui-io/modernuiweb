import type { Meta, StoryObj } from "@storybook/react";

import { TableFooterStatistics } from "../table-footer-statistics";

const meta = {
  title: "sections/application-ui/table-footers/Table Footer Statistics",
  component: TableFooterStatistics,
} satisfies Meta<typeof TableFooterStatistics>;

export default meta;

type Story = StoryObj<typeof TableFooterStatistics>;

export const Default: Story = {
  render: () => <TableFooterStatistics />,
};
