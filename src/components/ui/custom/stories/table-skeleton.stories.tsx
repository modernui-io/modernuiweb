import type { Meta, StoryObj } from "@storybook/react";

import { TableSkeleton } from "~/components/ui/custom/table/table-skeleton";

/**
 * A custom table skeleton component.
 */
const meta: Meta<typeof TableSkeleton> = {
  title: "custom/TableSkeleton",
  component: TableSkeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableSkeleton>;

/**
 * All Variants of the table skeleton.
 */

export const AllVariants: Story = {
  render: () => <TableSkeleton />,
};
