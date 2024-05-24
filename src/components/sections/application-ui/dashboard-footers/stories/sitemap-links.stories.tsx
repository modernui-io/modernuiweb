import type { Meta, StoryObj } from "@storybook/react";

import { FooterWithSitemapLinksAndLanguageSelector } from "~/components/sections/application-ui/dashboard-footers/sitemap-links";

const meta = {
  title: "sections/application-ui/dashboard-footers/sitemap-links",
  component: FooterWithSitemapLinksAndLanguageSelector,
} satisfies Meta<typeof FooterWithSitemapLinksAndLanguageSelector>;

export default meta;

type Story = StoryObj<typeof FooterWithSitemapLinksAndLanguageSelector>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <FooterWithSitemapLinksAndLanguageSelector />
    </div>
  ),
};
