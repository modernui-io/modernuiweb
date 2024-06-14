import type { Meta, StoryObj } from "@storybook/react";

import { CreateUserDrawer } from "../create-user-drawer";

const meta = {
  title: "sections/application-ui/create-drawers/Create User Drawer",
  component: CreateUserDrawer,
} satisfies Meta<typeof CreateUserDrawer>;

export default meta;

type Story = StoryObj<typeof CreateUserDrawer>;

export const Default: Story = {
  render: () => <CreateUserDrawer />,
};
