import type { Meta, StoryObj } from "@storybook/react";

import { TableFooterInputPagination } from "../table-footer-input-pagination";

const meta = {
  title: "sections/application-ui/table-footers/Table Footer Input Pagination",
  component: TableFooterInputPagination,
} satisfies Meta<typeof TableFooterInputPagination>;

export default meta;

type Story = StoryObj<typeof TableFooterInputPagination>;

export const Default: Story = {
  render: () => <TableFooterInputPagination />,
};
