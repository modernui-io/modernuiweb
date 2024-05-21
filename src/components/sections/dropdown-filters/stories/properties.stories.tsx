import type { Meta, StoryObj } from "@storybook/react";

import { DropdownFilterProperties } from "~/components/sections/dropdown-filters/properties";

const meta = {
  title: "sections/dropdown-filters/properties",
  component: DropdownFilterProperties,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownFilterProperties>;

export default meta;

type Story = StoryObj<typeof DropdownFilterProperties>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <DropdownFilterProperties />
    </div>
  ),
};
