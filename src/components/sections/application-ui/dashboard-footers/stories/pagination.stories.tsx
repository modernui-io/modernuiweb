import type { Meta, StoryObj } from "@storybook/react";

import { FooterWithPagination } from "~/components/sections/application-ui/dashboard-footers/pagination";

const meta = {
  title: "sections/application-ui/dashboard-footers/pagination",
  component: FooterWithPagination,
} satisfies Meta<typeof FooterWithPagination>;

export default meta;

type Story = StoryObj<typeof FooterWithPagination>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <FooterWithPagination />
    </div>
  ),
};
