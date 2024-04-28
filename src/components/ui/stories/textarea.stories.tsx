import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Label } from "../label";
import { Textarea } from "../textarea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea {...args} placeholder="Type your message here." id="message" />
    </div>
  ),
};
export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea
        placeholder="Type your message here."
        id="message-2"
        {...args}
      />
      <p className="text-sm text-slate-500">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Type your message here.",
  },
};
export const WithButton: Story = {
  render: (args) => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." {...args} />
      <Button>Send message</Button>
    </div>
  ),
};
