import type { Meta, StoryObj } from "@storybook/react";

import { TripleDashboardNavbarWithCTAButtonAndSearchInput } from "~/components/sections/application-ui/dashboard-navbars/cta-search";

const meta = {
  title: "sections/application-ui/dashboard-navbars/cta-search",
  component: TripleDashboardNavbarWithCTAButtonAndSearchInput,
} satisfies Meta<typeof TripleDashboardNavbarWithCTAButtonAndSearchInput>;

export default meta;

type Story = StoryObj<typeof TripleDashboardNavbarWithCTAButtonAndSearchInput>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <TripleDashboardNavbarWithCTAButtonAndSearchInput />
    </div>
  ),
};
