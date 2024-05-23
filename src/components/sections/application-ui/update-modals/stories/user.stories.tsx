import type { Meta, StoryObj } from "@storybook/react";

import { UpdateUserModal } from "~/components/sections/application-ui/update-modals/user";

const meta = {
  title: "sections/application-ui/update-modals/user",
  component: UpdateUserModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateUserModal>;

export default meta;

type Story = StoryObj<typeof UpdateUserModal>;

export const Default: Story = {
  render: () => <UpdateUserModal />,
};
