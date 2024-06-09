import type { Meta, StoryObj } from "@storybook/react";

import { TableFooterDropdownLink } from "../table-footer-dropdown-link";

const meta = {
  title: "sections/application-ui/table-footers/Table Footer Dropdown Link",
  component: TableFooterDropdownLink,
} satisfies Meta<typeof TableFooterDropdownLink>;

export default meta;

type Story = StoryObj<typeof TableFooterDropdownLink>;

export const Default: Story = {
  render: () => <TableFooterDropdownLink />,
};
