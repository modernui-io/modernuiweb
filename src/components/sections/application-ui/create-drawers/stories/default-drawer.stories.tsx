import type { Meta, StoryObj } from "@storybook/react";

import { DefaultDrawer } from "../default-drawer";

const meta = {
  title: "sections/application-ui/create-drawers/Default Drawer",
  component: DefaultDrawer,
} satisfies Meta<typeof DefaultDrawer>;

export default meta;

type Story = StoryObj<typeof DefaultDrawer>;

export const Default: Story = {
  render: () => <DefaultDrawer />,
};
