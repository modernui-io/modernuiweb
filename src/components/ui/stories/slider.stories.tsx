import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "../slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};
