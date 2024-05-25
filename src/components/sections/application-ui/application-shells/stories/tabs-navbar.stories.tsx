import type { Meta, StoryObj } from "@storybook/react";

import { TabsNavbarApplicationShell } from "~/components/sections/application-ui/application-shells/tabs-navbar";

const meta = {
  title: "sections/application-ui/application-shells/tabs-navbar",
  component: TabsNavbarApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TabsNavbarApplicationShell>;

export default meta;

type Story = StoryObj<typeof TabsNavbarApplicationShell>;

export const Default: Story = {
  render: () => <TabsNavbarApplicationShell />,
};
