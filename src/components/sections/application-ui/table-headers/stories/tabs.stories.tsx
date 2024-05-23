import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithTabs } from "~/components/sections/application-ui/table-headers/tabs";

const meta = {
  title: "sections/application-ui/table-headers/tabs",
  component: TableHeaderWithTabs,
} satisfies Meta<typeof TableHeaderWithTabs>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithTabs>;

export const Default: Story = {
  render: () => <TableHeaderWithTabs />,
};
