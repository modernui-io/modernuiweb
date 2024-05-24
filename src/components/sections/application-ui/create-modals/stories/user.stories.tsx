import type { Meta, StoryObj } from "@storybook/react";

import { CreateUserModal } from "~/components/sections/application-ui/create-modals/user";

const meta = {
  title: "sections/application-ui/create-modals/user",
  component: CreateUserModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateUserModal>;

export default meta;

type Story = StoryObj<typeof CreateUserModal>;

export const Default: Story = {
  render: () => <CreateUserModal />,
};
