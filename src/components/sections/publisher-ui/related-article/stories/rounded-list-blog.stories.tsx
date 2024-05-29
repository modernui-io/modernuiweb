import type { Meta, StoryObj } from "@storybook/react";

import RoundedList from "../rounded-list-blog";

const meta = {
  title: "sections/Publisher UI/Related Article/Rounded list of blog post",
  component: RoundedList,
} satisfies Meta<typeof RoundedList>;

export default meta;

type Story = StoryObj<typeof RoundedList>;

export const Default: Story = {
  render: () => <RoundedList />,
};
