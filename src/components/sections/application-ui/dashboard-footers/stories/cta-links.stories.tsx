import type { Meta, StoryObj } from "@storybook/react";

import { FooterWithCTAAndLinks } from "~/components/sections/application-ui/dashboard-footers/cta-links";

const meta = {
  title: "sections/application-ui/dashboard-footers/cta-links",
  component: FooterWithCTAAndLinks,
} satisfies Meta<typeof FooterWithCTAAndLinks>;

export default meta;

type Story = StoryObj<typeof FooterWithCTAAndLinks>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <FooterWithCTAAndLinks />
    </div>
  ),
};
