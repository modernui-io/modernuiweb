import type { Meta, StoryObj } from "@storybook/react";

import { BlogPostsWithFeaturedImageHero } from "../blog-posts";

const meta = {
  title: "sections/marketing-ui/hero-sections/blog-posts",
  component: BlogPostsWithFeaturedImageHero,
} satisfies Meta<typeof BlogPostsWithFeaturedImageHero>;

export default meta;

type Story = StoryObj<typeof BlogPostsWithFeaturedImageHero>;

export const Default: Story = {
  render: () => <BlogPostsWithFeaturedImageHero />,
};
