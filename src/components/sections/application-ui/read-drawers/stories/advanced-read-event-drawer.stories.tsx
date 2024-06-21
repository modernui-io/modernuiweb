import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedReadEventDrawer } from "../advanced-read-event-drawer";

const meta = {
  title: "sections/application-ui/read-drawers/Advanced Read Event Drawer",
  component: AdvancedReadEventDrawer,
} satisfies Meta<typeof AdvancedReadEventDrawer>;

export default meta;

type Story = StoryObj<typeof AdvancedReadEventDrawer>;

export const Default: Story = {
  render: () => <AdvancedReadEventDrawer />,
};
