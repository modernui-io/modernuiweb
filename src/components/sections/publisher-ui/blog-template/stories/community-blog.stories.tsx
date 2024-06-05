import type { Meta, StoryObj } from "@storybook/react";

import CommunityBlog from "../community-blog";

const meta = {
  title: "sections/Publisher UI/Community blog posts",
  component: CommunityBlog,
} satisfies Meta<typeof CommunityBlog>;

export default meta;

type Story = StoryObj<typeof CommunityBlog>;

export const Default: Story = {
  render: () => <CommunityBlog />,
};
