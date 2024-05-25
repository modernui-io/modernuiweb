import type { Meta, StoryObj } from "@storybook/react";

import { UserProfileSidebarApplicationShell } from "~/components/sections/application-ui/application-shells/user-profile-sidebar";

const meta = {
  title: "sections/application-ui/application-shells/user-profile-sidebar",
  component: UserProfileSidebarApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof UserProfileSidebarApplicationShell>;

export default meta;

type Story = StoryObj<typeof UserProfileSidebarApplicationShell>;

export const Default: Story = {
  render: () => <UserProfileSidebarApplicationShell />,
};
