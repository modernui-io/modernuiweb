import type { Meta, StoryObj } from "@storybook/react";

import CommentsDrawerReview from "../comments-drawer";

const meta = {
  title:
    "sections/E-Commerce/Product Reviews/Product review with comments and drawer",
  component: CommentsDrawerReview,
} satisfies Meta<typeof CommentsDrawerReview>;

export default meta;

type Story = StoryObj<typeof CommentsDrawerReview>;

export const Default: Story = {
  render: () => <CommentsDrawerReview />,
};
