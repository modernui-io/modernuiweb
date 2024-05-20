import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithTabs } from "~/components/sections/table-headers/tabs";

const meta = {
  title: "sections/table-headers/tabs",
  component: TableHeaderWithTabs,
} satisfies Meta<typeof TableHeaderWithTabs>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithTabs>;

export const Default: Story = {
  render: () => <TableHeaderWithTabs />,
};
