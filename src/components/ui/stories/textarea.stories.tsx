import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Label } from "../label";
import { Textarea } from "../textarea";

/**
 * Displays a form textarea or a component that looks like a textarea.
 */
const meta: Meta<typeof Textarea> = {
  title: "ui/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Type your message here.",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/**
 * The default form of the textarea.
 */
export const Default: Story = {};

/**
 * With label textarea.
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea {...args} placeholder="Type your message here." id="message" />
    </div>
  ),
};

/**
 * With text textarea.
 */
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

/**
 * A disabled textarea.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Type your message here.",
  },
};

/**
 * A textarea with a button.
 */
export const WithButton: Story = {
  render: (args) => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." {...args} />
      <Button>Send message</Button>
    </div>
  ),
};
