import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

/**
 * A set of checkable buttons—known as radio buttons—where no more than one of
 * the buttons can be checked at a time.
 */
const meta: Meta<typeof RadioGroup> = {
  title: "ui/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/**
 * The default form of the radio group.
 */
export const Default: Story = {
  args: {
    defaultValue: "comfortable",
    className: "grid gap-2 grid-cols-[1rem_1fr] items-center",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};
