import type { Meta, StoryObj } from "@storybook/react";

import { ReadDefaultDrawer } from "../read-default-drawer";

const meta = {
  title: "sections/application-ui/read-drawers/Read Default Drawer",
  component: ReadDefaultDrawer,
} satisfies Meta<typeof ReadDefaultDrawer>;

export default meta;

type Story = StoryObj<typeof ReadDefaultDrawer>;

export const Default: Story = {
  render: () => <ReadDefaultDrawer />,
};
