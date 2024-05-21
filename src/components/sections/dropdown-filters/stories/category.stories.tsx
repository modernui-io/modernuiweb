import type { Meta, StoryObj } from "@storybook/react";

import { DropdownFilterCategory } from "~/components/sections/dropdown-filters/category";

const meta = {
  title: "sections/dropdown-filters/category",
  component: DropdownFilterCategory,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownFilterCategory>;

export default meta;

type Story = StoryObj<typeof DropdownFilterCategory>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <DropdownFilterCategory />
    </div>
  ),
};
