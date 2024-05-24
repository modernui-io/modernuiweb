import type { Meta, StoryObj } from "@storybook/react";

import { ReadUserModal } from "~/components/sections/application-ui/read-modals/user";

const meta = {
  title: "sections/application-ui/read-modals/user",
  component: ReadUserModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReadUserModal>;

export default meta;

type Story = StoryObj<typeof ReadUserModal>;

export const Default: Story = {
  render: () => <ReadUserModal />,
};
