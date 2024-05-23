import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithBreadcrumb } from "~/components/sections/application-ui/table-headers/breadcrumb";

const meta = {
  title: "sections/application-ui/table-headers/breadcrumb",
  component: TableHeaderWithBreadcrumb,
} satisfies Meta<typeof TableHeaderWithBreadcrumb>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithBreadcrumb>;

export const Default: Story = {
  render: () => <TableHeaderWithBreadcrumb />,
};
