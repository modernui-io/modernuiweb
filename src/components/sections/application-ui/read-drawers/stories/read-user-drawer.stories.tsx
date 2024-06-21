import type { Meta, StoryObj } from "@storybook/react";

import { ReadUserDrawer } from "../read-user-drawer";

const meta = {
  title: "sections/application-ui/read-drawers/Read User Drawer",
  component: ReadUserDrawer,
} satisfies Meta<typeof ReadUserDrawer>;

export default meta;

type Story = StoryObj<typeof ReadUserDrawer>;

export const Default: Story = {
  render: () => <ReadUserDrawer />,
};
