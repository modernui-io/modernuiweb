import type { Meta, StoryObj } from "@storybook/react";

import { DropdownFilterRange } from "~/components/sections/dropdown-filters/range";

const meta = {
  title: "sections/dropdown-filters/range",
  component: DropdownFilterRange,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownFilterRange>;

export default meta;

type Story = StoryObj<typeof DropdownFilterRange>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <DropdownFilterRange />
    </div>
  ),
};
