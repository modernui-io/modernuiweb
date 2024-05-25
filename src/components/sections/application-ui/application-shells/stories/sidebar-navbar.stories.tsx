import type { Meta, StoryObj } from "@storybook/react";

import { SidebarNavbarApplicationShell } from "~/components/sections/application-ui/application-shells/sidebar-navbar";

const meta = {
  title: "sections/application-ui/application-shells/sidebar-navbar",
  component: SidebarNavbarApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidebarNavbarApplicationShell>;

export default meta;

type Story = StoryObj<typeof SidebarNavbarApplicationShell>;

export const Default: Story = {
  render: () => <SidebarNavbarApplicationShell />,
};
