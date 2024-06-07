import type { Meta, StoryObj } from "@storybook/react";

import { SitemapLinks } from "../sitemap-links";

const meta = {
  title: "sections/Marketing UI/Footers/Sitemap Links",
  component: SitemapLinks,
} satisfies Meta<typeof SitemapLinks>;

export default meta;

type Story = StoryObj<typeof SitemapLinks>;

export const Default: Story = {
  render: () => <SitemapLinks />,
};
