import type { Meta, StoryObj } from "@storybook/react";

import { TableFooterProgressBar } from "../table-footer-progress-bar";

const meta = {
  title: "sections/application-ui/table-footers/Table Footer Progress Bar",
  component: TableFooterProgressBar,
} satisfies Meta<typeof TableFooterProgressBar>;

export default meta;

type Story = StoryObj<typeof TableFooterProgressBar>;

export const Default: Story = {
  render: () => <TableFooterProgressBar />,
};
