import type { Meta, StoryObj } from "@storybook/react";

import { DropdownFilterStatus } from "~/components/sections/dropdown-filters/status";

const meta = {
  title: "sections/dropdown-filters/status",
  component: DropdownFilterStatus,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownFilterStatus>;

export default meta;

type Story = StoryObj<typeof DropdownFilterStatus>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <DropdownFilterStatus />
    </div>
  ),
};
