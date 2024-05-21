import type { Meta, StoryObj } from "@storybook/react";

import { DefaultDropdownFilter } from "~/components/sections/dropdown-filters/default";

const meta = {
  title: "sections/dropdown-filters/default",
  component: DefaultDropdownFilter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultDropdownFilter>;

export default meta;

type Story = StoryObj<typeof DefaultDropdownFilter>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5">
      <DefaultDropdownFilter />
    </div>
  ),
};
