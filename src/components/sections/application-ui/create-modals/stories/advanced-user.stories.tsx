import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedCreateUserModal } from "~/components/sections/application-ui/create-modals/advanced-user";

const meta = {
  title: "sections/application-ui/create-modals/advanced-user",
  component: AdvancedCreateUserModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedCreateUserModal>;

export default meta;

type Story = StoryObj<typeof AdvancedCreateUserModal>;

export const Default: Story = {
  render: () => <AdvancedCreateUserModal />,
};
