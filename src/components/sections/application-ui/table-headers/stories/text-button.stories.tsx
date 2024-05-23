import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithTextAndButton } from "~/components/sections/application-ui/table-headers/text-button";

const meta = {
  title: "sections/application-ui/table-headers/text-button",
  component: TableHeaderWithTextAndButton,
} satisfies Meta<typeof TableHeaderWithTextAndButton>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithTextAndButton>;

export const Default: Story = {
  render: () => <TableHeaderWithTextAndButton />,
};
