import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

/**
 * Displays a form input field or a component that looks like an input field.
 */
const meta: Meta<typeof Input> = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    className: "w-96",
    type: "email",
    placeholder: "Email",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * The default form of the input field.
 */
export const Default: Story = {};

/**
 * Use the `disabled` prop to make the input non-interactive and appears faded,
 * indicating that input is not currently accepted.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Use the `Label` component to includes a clear, descriptive label above or
 * alongside the input area to guide users.
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" {...args} />
    </div>
  ),
};

/**
 * Use a text element below the input field to provide additional instructions
 * or information to users.
 */
export const WithHelperText: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" {...args} />
      <p className="text-sm text-foreground/50">Enter your email address.</p>
    </div>
  ),
};

/**
 * Use the `Button` component to indicate that the input field can be submitted
 * or used to trigger an action.
 */
export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};
