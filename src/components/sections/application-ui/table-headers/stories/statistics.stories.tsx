import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithStatistics } from "~/components/sections/application-ui/table-headers/statistics";

const meta = {
  title: "sections/application-ui/table-headers/statistics",
  component: TableHeaderWithStatistics,
} satisfies Meta<typeof TableHeaderWithStatistics>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithStatistics>;

export const Default: Story = {
  render: () => <TableHeaderWithStatistics />,
};
