import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../label";

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Label htmlFor="email" {...args}>
      Your email address
    </Label>
  ),
};
