import type { Meta, StoryObj } from "@storybook/react";

import DefaultBlog from "../default-blog";

const meta = {
  title: "sections/Publisher UI/Default Blog",
  component: DefaultBlog,
} satisfies Meta<typeof DefaultBlog>;

export default meta;

type Story = StoryObj<typeof DefaultBlog>;

export const Default: Story = {
  render: () => <DefaultBlog />,
};
