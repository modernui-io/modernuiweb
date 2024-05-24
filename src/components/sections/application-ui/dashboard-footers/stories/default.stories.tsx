import type { Meta, StoryObj } from "@storybook/react";

import { DefaultDashboardFooter } from "~/components/sections/application-ui/dashboard-footers/default";

const meta = {
  title: "sections/application-ui/dashboard-footers/default",
  component: DefaultDashboardFooter,
} satisfies Meta<typeof DefaultDashboardFooter>;

export default meta;

type Story = StoryObj<typeof DefaultDashboardFooter>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <DefaultDashboardFooter />
    </div>
  ),
};
