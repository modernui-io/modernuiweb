import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedCreateUserDrawer } from "../advanced-create-user-drawer";

const meta = {
  title: "sections/application-ui/create-drawers/Advanced Create User Drawer",
  component: AdvancedCreateUserDrawer,
} satisfies Meta<typeof AdvancedCreateUserDrawer>;

export default meta;

type Story = StoryObj<typeof AdvancedCreateUserDrawer>;

export const Default: Story = {
  render: () => <AdvancedCreateUserDrawer />,
};
