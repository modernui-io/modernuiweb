import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedDropdownFilterOptions } from "~/components/sections/dropdown-filters/advanced-options";

const meta = {
  title: "sections/dropdown-filters/advanced-options",
  component: AdvancedDropdownFilterOptions,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedDropdownFilterOptions>;

export default meta;

type Story = StoryObj<typeof AdvancedDropdownFilterOptions>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <AdvancedDropdownFilterOptions />
    </div>
  ),
};
