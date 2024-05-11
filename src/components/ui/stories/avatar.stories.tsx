import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

/**
 * An image element with a fallback for representing the user.
 */
const meta: Meta<typeof Avatar> = {
  title: "ui/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export default meta;

type Story = StoryObj<typeof Avatar>;

/**
 * The default form of the avatar.
 */
export const Default: Story = {};
