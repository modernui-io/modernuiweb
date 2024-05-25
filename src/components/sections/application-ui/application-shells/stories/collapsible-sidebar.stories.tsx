import type { Meta, StoryObj } from "@storybook/react";

import { CollapsibleSidebarApplicationShell } from "~/components/sections/application-ui/application-shells/collapsible-sidebar";

const meta = {
  title: "sections/application-ui/application-shells/collapsible-sidebar",
  component: CollapsibleSidebarApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CollapsibleSidebarApplicationShell>;

export default meta;

type Story = StoryObj<typeof CollapsibleSidebarApplicationShell>;

export const Default: Story = {
  render: () => <CollapsibleSidebarApplicationShell />,
};
