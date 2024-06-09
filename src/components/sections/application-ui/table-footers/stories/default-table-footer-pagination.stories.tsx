import type { Meta, StoryObj } from "@storybook/react";

import { DefaultFooterPagination } from "../default-table-footer-pagination";

const meta = {
  title:
    "sections/application-ui/table-footers/Default Table Footer Pagination",
  component: DefaultFooterPagination,
} satisfies Meta<typeof DefaultFooterPagination>;

export default meta;

type Story = StoryObj<typeof DefaultFooterPagination>;

export const Default: Story = {
  render: () => <DefaultFooterPagination />,
};
