import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedDropdownFilterKeywords } from "~/components/sections/application-ui/dropdown-filters/advanced-keywords";

const meta = {
  title: "sections/application-ui/dropdown-filters/advanced-keywords",
  component: AdvancedDropdownFilterKeywords,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedDropdownFilterKeywords>;

export default meta;

type Story = StoryObj<typeof AdvancedDropdownFilterKeywords>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <AdvancedDropdownFilterKeywords />
    </div>
  ),
};
