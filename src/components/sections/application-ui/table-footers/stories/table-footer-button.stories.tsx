import type { Meta, StoryObj } from "@storybook/react";

import { TableFooterButton } from "../table-footer-button";

const meta = {
  title: "sections/application-ui/table-footers/Table Footer Button",
  component: TableFooterButton,
} satisfies Meta<typeof TableFooterButton>;

export default meta;

type Story = StoryObj<typeof TableFooterButton>;

export const Default: Story = {
  render: () => <TableFooterButton />,
};
