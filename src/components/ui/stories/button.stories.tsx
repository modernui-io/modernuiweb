import type { Meta, StoryObj } from "@storybook/react";
import { Loader2, Mail } from "lucide-react";

import { Button } from "../button";

/**
 * Displays a button or a component that looks like a button.
 */
const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * The default form of the button, used for primary actions and commands.
 */
export const Default: Story = {};

/**
 * Use the `outline` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

/**
 * Use the `secondary` button to call for less emphasized actions, styled to
 * complement the primary button while being less conspicuous.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * Use the `ghost` button is minimalistic and subtle, for less intrusive
 * actions.
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

/**
 * Use the `destructive` button to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

/**
 * Use the `link` button to reduce emphasis on tertiary actions, such as
 * hyperlink or navigation, providing a text-only interactive element.
 */
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

/**
 * Add an icon element to a button to enhance visual communication and
 * providing additional context for the action.
 */
export const WithIcon: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};

/**
 * Add the `disabled` prop to a button to prevent interactions and add a
 * loading indicator, such as a spinner, to signify an in-progress action.
 */
export const Loading: Story = {
  args: {
    variant: "default",
    disabled: true,
  },
  render: (args) => (
    <Button disabled {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};

/**
 * Use the `sm` size for a smaller button, suitable for interfaces needing
 * compact elements without sacrificing usability.
 */
export const Small: Story = {
  args: {
    size: "sm",
  },
};

/**
 * Use the `lg` size for a larger button, offering better visibility and
 * easier interaction for users.
 */
export const Large: Story = {
  args: {
    size: "lg",
  },
};

/**
 * Use the "icon" size for a button with only an icon.
 */
export const Icon: Story = {
  args: {
    ...Secondary.args,
    size: "icon",
    children: <Mail />,
  },
};

/**
 * Add the `disabled` prop to prevent interactions with the button.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
