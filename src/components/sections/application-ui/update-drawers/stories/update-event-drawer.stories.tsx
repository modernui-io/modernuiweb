import type { Meta, StoryObj } from "@storybook/react";

import { UpdateEventDrawer } from "../update-event-drawer";

const meta = {
  title: "sections/application-ui/update-drawers/Update Event Drawer",
  component: UpdateEventDrawer,
} satisfies Meta<typeof UpdateEventDrawer>;

export default meta;

type Story = StoryObj<typeof UpdateEventDrawer>;

export const Default: Story = {
  render: () => <UpdateEventDrawer />,
};
