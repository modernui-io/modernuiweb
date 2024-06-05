import type { Meta, StoryObj } from "@storybook/react";

import RightSidebarArticle from "../right-sidebar";

const meta = {
  title: "sections/Publisher UI/Right sidebar article",
  component: RightSidebarArticle,
} satisfies Meta<typeof RightSidebarArticle>;

export default meta;

type Story = StoryObj<typeof RightSidebarArticle>;

export const Default: Story = {
  render: () => <RightSidebarArticle />,
};
