import type { Meta, StoryObj } from "@storybook/react";

import { DefaultDashboardNavbar } from "~/components/sections/application-ui/dashboard-navbars/default";

const meta = {
  title: "sections/application-ui/dashboard-navbars/default",
  component: DefaultDashboardNavbar,
} satisfies Meta<typeof DefaultDashboardNavbar>;

export default meta;

type Story = StoryObj<typeof DefaultDashboardNavbar>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <DefaultDashboardNavbar />
    </div>
  ),
};
