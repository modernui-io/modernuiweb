import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "../slider";

/**
 * An input where the user selects a value from within a given range.
 */
const meta: Meta<typeof Slider> = {
  title: "ui/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

/**
 * The default form of the slider.
 */
export const Default: Story = {};

/**
 * Use the `inverted` prop to have the slider fill from right to left.
 */
export const Inverted: Story = {
  args: {
    inverted: true,
  },
};

/**
 * Use the `disabled` prop to disable the slider.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
