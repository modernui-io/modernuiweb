import type { Meta, StoryObj } from "@storybook/react";

import { DoubleDashboardNavbarWithProjectDropdown } from "~/components/sections/application-ui/dashboard-navbars/project-dropdown";

const meta = {
  title: "sections/application-ui/dashboard-navbars/project-dropdown",
  component: DoubleDashboardNavbarWithProjectDropdown,
} satisfies Meta<typeof DoubleDashboardNavbarWithProjectDropdown>;

export default meta;

type Story = StoryObj<typeof DoubleDashboardNavbarWithProjectDropdown>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <DoubleDashboardNavbarWithProjectDropdown />
    </div>
  ),
};
