import type { Meta, StoryObj } from "@storybook/react";

import { ReadEventDrawer } from "../read-event-drawer";

const meta = {
  title: "sections/application-ui/read-drawers/Read Event Drawer",
  component: ReadEventDrawer,
} satisfies Meta<typeof ReadEventDrawer>;

export default meta;

type Story = StoryObj<typeof ReadEventDrawer>;

export const Default: Story = {
  render: () => <ReadEventDrawer />,
};
