import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithSettings } from "~/components/sections/table-headers/settings";

const meta = {
  title: "sections/table-headers/settings",
  component: TableHeaderWithSettings,
} satisfies Meta<typeof TableHeaderWithSettings>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithSettings>;

export const Default: Story = {
  render: () => <TableHeaderWithSettings />,
};
