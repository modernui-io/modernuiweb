import type { Meta, StoryObj } from "@storybook/react";

import { CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput } from "~/components/sections/application-ui/dashboard-navbars/centered-cta-search";

const meta = {
  title: "sections/application-ui/dashboard-navbars/centered-cta-search",
  component: CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput,
} satisfies Meta<
  typeof CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput
>;

export default meta;

type Story = StoryObj<
  typeof CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput
>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput />
    </div>
  ),
};
