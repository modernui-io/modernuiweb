import type { Meta, StoryObj } from "@storybook/react";

import { EmptyTableIcon } from "~/components/ui/custom/table/empty-table-icon";

/**
 * A custom empty table icon component.
 */
const meta: Meta<typeof EmptyTableIcon> = {
  title: "custom/EmptyTableIcon",
  component: EmptyTableIcon,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof EmptyTableIcon>;

/**
 * The default form of the empty table icon.
 */
export const Default: Story = {
  render: (args) => <EmptyTableIcon {...args} />,
};
