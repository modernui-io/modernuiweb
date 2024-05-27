import type { Meta, StoryObj } from "@storybook/react";

import RelatedArticles from "../default";

const meta = {
  title: "sections/Publisher UI/Related Article/Default related articles",
  component: RelatedArticles,
} satisfies Meta<typeof RelatedArticles>;

export default meta;

type Story = StoryObj<typeof RelatedArticles>;

export const Default: Story = {
  render: () => <RelatedArticles />,
};