import type { Meta, StoryObj } from "@storybook/react";

import { FooterWithActionSelect } from "~/components/sections/application-ui/dashboard-footers/action-select";

const meta = {
  title: "sections/application-ui/dashboard-footers/action-select",
  component: FooterWithActionSelect,
} satisfies Meta<typeof FooterWithActionSelect>;

export default meta;

type Story = StoryObj<typeof FooterWithActionSelect>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <FooterWithActionSelect />
    </div>
  ),
};
