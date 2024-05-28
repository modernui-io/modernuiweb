import type { Meta, StoryObj } from "@storybook/react";

import { AlertSideNavigation } from "~/components/sections/application-ui/side-navigations/alert";

const meta = {
  title: "sections/application-ui/side-navigations/alert",
  component: AlertSideNavigation,
} satisfies Meta<typeof AlertSideNavigation>;

export default meta;

type Story = StoryObj<typeof AlertSideNavigation>;

export const Default: Story = {
  render: () => <AlertSideNavigation />,
};
