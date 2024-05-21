import type { Meta, StoryObj } from "@storybook/react";

import { DropdownFilterTabsOptions } from "~/components/sections/dropdown-filters/tabs-options";

const meta = {
  title: "sections/dropdown-filters/tabs-options",
  component: DropdownFilterTabsOptions,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownFilterTabsOptions>;

export default meta;

type Story = StoryObj<typeof DropdownFilterTabsOptions>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <DropdownFilterTabsOptions />
    </div>
  ),
};
