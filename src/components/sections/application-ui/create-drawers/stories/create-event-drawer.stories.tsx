import type { Meta, StoryObj } from "@storybook/react";

import { CreateEventDrawer } from "../create-event-drawer";

const meta = {
  title: "sections/application-ui/create-drawers/Create Event Drawer",
  component: CreateEventDrawer,
} satisfies Meta<typeof CreateEventDrawer>;

export default meta;

type Story = StoryObj<typeof CreateEventDrawer>;

export const Default: Story = {
  render: () => <CreateEventDrawer />,
};
