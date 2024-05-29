import type { Meta, StoryObj } from "@storybook/react";

import { UserSwitchSideNavigation } from "~/components/sections/application-ui/side-navigations/user-switch";

const meta = {
  title: "sections/application-ui/side-navigations/user-switch",
  component: UserSwitchSideNavigation,
} satisfies Meta<typeof UserSwitchSideNavigation>;

export default meta;

type Story = StoryObj<typeof UserSwitchSideNavigation>;

export const Default: Story = {
  render: () => <UserSwitchSideNavigation />,
};
