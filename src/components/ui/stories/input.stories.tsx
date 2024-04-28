import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    type: "email",
    placeholder: "Email",
  },
};
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" {...args} />
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" {...args} />
      <p className="text-sm text-slate-500">Enter your email address.</p>
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};
