import type { Meta, StoryObj } from "@storybook/react";

import { DoubleSidebarApplicationShell } from "~/components/sections/application-ui/application-shells/double-sidebar";

const meta = {
  title: "sections/application-ui/application-shells/double-sidebar",
  component: DoubleSidebarApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DoubleSidebarApplicationShell>;

export default meta;

type Story = StoryObj<typeof DoubleSidebarApplicationShell>;

export const Default: Story = {
  render: () => <DoubleSidebarApplicationShell />,
};
