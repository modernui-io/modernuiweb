import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "../progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    value: 33,
  },
};
