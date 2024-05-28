import type { Meta, StoryObj } from "@storybook/react";

import { NotificationsSideNavigation } from "~/components/sections/application-ui/side-navigations/notifications";

const meta = {
  title: "sections/application-ui/side-navigations/notifications",
  component: NotificationsSideNavigation,
} satisfies Meta<typeof NotificationsSideNavigation>;

export default meta;

type Story = StoryObj<typeof NotificationsSideNavigation>;

export const Default: Story = {
  render: () => <NotificationsSideNavigation />,
};
