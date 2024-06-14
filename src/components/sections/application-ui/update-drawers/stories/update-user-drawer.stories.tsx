import type { Meta, StoryObj } from "@storybook/react";

import { UpdateUserDrawer } from "../update-user-drawer";

const meta = {
  title: "sections/application-ui/update-drawers/Update User Drawer",
  component: UpdateUserDrawer,
} satisfies Meta<typeof UpdateUserDrawer>;

export default meta;

type Story = StoryObj<typeof UpdateUserDrawer>;

export const Default: Story = {
  render: () => <UpdateUserDrawer />,
};
