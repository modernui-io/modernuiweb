import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedReadUserDrawer } from "../advanced-read-user-drawer";

const meta = {
  title: "sections/application-ui/read-drawers/Advanced Read User Drawer",
  component: AdvancedReadUserDrawer,
} satisfies Meta<typeof AdvancedReadUserDrawer>;

export default meta;

type Story = StoryObj<typeof AdvancedReadUserDrawer>;

export const Default: Story = {
  render: () => <AdvancedReadUserDrawer />,
};
