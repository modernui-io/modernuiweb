import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithComparison } from "~/components/sections/application-ui/table-headers/comparison";

const meta = {
  title: "sections/application-ui/table-headers/comparison",
  component: TableHeaderWithComparison,
} satisfies Meta<typeof TableHeaderWithComparison>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithComparison>;

export const Default: Story = {
  render: () => <TableHeaderWithComparison />,
};
