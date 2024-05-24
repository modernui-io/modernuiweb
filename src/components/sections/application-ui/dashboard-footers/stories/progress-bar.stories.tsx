import type { Meta, StoryObj } from "@storybook/react";

import { FooterWithProgressBar } from "~/components/sections/application-ui/dashboard-footers/progress-bar";

const meta = {
  title: "sections/application-ui/dashboard-footers/progress-bar",
  component: FooterWithProgressBar,
} satisfies Meta<typeof FooterWithProgressBar>;

export default meta;

type Story = StoryObj<typeof FooterWithProgressBar>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <FooterWithProgressBar />
    </div>
  ),
};
