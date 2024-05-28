import type { Meta, StoryObj } from "@storybook/react";

import { DoubleDashboardNavbarWithSearchInput } from "~/components/sections/application-ui/dashboard-navbars/search-input";

const meta = {
  title: "sections/application-ui/dashboard-navbars/search-input",
  component: DoubleDashboardNavbarWithSearchInput,
} satisfies Meta<typeof DoubleDashboardNavbarWithSearchInput>;

export default meta;

type Story = StoryObj<typeof DoubleDashboardNavbarWithSearchInput>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <DoubleDashboardNavbarWithSearchInput />
    </div>
  ),
};
