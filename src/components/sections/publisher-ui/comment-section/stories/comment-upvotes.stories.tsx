import type { Meta, StoryObj } from "@storybook/react";

import { CommentsUpvotes } from "../comment-upvotes";

const meta = {
  title: "sections/Publisher UI/Comments/Comment Section with Upvotes",
  component: CommentsUpvotes,
} satisfies Meta<typeof CommentsUpvotes>;

export default meta;

type Story = StoryObj<typeof CommentsUpvotes>;

export const Default: Story = {
  render: () => <CommentsUpvotes />,
};
