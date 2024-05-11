import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../label";
import { Switch } from "../switch";

/**
 * A control that allows the user to toggle between checked and not checked.
 */
const meta: Meta<typeof Switch> = {
  title: "ui/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <Label htmlFor={args.id} className="peer-disabled:text-foreground/50">
        Airplane Mode
      </Label>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Switch>;

/**
 * The default form of the switch.
 */
export const Default: Story = {
  args: {
    id: "default-switch",
  },
};

/**
 * Use the `disabled` prop to disable the switch.
 */
export const Disabled: Story = {
  args: {
    id: "disabled-switch",
    disabled: true,
  },
};
