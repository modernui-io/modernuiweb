import type { Meta, StoryObj } from "@storybook/react";

import { TripleDashbardNavbarWithProjectSwitchAndSubnav } from "~/components/sections/application-ui/dashboard-navbars/project-switch-subnav";

const meta = {
  title: "sections/application-ui/dashboard-navbars/project-switch-subnav",
  component: TripleDashbardNavbarWithProjectSwitchAndSubnav,
} satisfies Meta<typeof TripleDashbardNavbarWithProjectSwitchAndSubnav>;

export default meta;

type Story = StoryObj<typeof TripleDashbardNavbarWithProjectSwitchAndSubnav>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <TripleDashbardNavbarWithProjectSwitchAndSubnav />
    </div>
  ),
};
