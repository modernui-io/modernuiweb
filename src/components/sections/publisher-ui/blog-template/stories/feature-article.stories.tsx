import type { Meta, StoryObj } from "@storybook/react";

import FeatureArticle from "../Feature-article";

const meta = {
  title: "sections/Publisher UI/Featured article with header",
  component: FeatureArticle,
} satisfies Meta<typeof FeatureArticle>;

export default meta;

type Story = StoryObj<typeof FeatureArticle>;

export const Default: Story = {
  render: () => <FeatureArticle />,
};
