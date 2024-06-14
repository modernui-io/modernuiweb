import type { Meta, StoryObj } from "@storybook/react";

import { UpdateDefaultDrawer } from "../update-default-drawer";

const meta = {
  title: "sections/application-ui/update-drawers/Update Default Drawer",
  component: UpdateDefaultDrawer,
} satisfies Meta<typeof UpdateDefaultDrawer>;

export default meta;

type Story = StoryObj<typeof UpdateDefaultDrawer>;

export const Default: Story = {
  render: () => <UpdateDefaultDrawer />,
};
