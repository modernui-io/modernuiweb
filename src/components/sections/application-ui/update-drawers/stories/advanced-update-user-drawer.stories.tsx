import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedUpdateUserDrawer } from "../advanced-update-user-drawer";

const meta = {
  title: "sections/application-ui/update-drawers/Advanced Update User Drawer",
  component: AdvancedUpdateUserDrawer,
} satisfies Meta<typeof AdvancedUpdateUserDrawer>;

export default meta;

type Story = StoryObj<typeof AdvancedUpdateUserDrawer>;

export const Default: Story = {
  render: () => <AdvancedUpdateUserDrawer />,
};
