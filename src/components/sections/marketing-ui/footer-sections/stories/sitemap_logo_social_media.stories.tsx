import type { Meta, StoryObj } from "@storybook/react";

import { SitemapLogoSocialMedia } from "../sitemap_logo_social_media";

const meta = {
  title: "sections/Marketing UI/Footers/Sitemap With Logo And Social Media",
  component: SitemapLogoSocialMedia,
} satisfies Meta<typeof SitemapLogoSocialMedia>;

export default meta;

type Story = StoryObj<typeof SitemapLogoSocialMedia>;

export const Default: Story = {
  render: () => <SitemapLogoSocialMedia />,
};
