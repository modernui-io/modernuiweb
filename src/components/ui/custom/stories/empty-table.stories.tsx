import type { Meta, StoryObj } from "@storybook/react";

import { EmptyTable } from "~/components/ui/custom/table/empty-table";

/**
 * A custom empty table component.
 */
const meta: Meta<typeof EmptyTable> = {
  title: "custom/EmptyTable",
  component: EmptyTable,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof EmptyTable>;

/**
 * The default form of the empty table.
 */
export const Default: Story = {
  render: (args) => <EmptyTable {...args} />,
};
