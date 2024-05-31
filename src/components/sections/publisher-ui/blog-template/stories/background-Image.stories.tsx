import type { Meta, StoryObj } from "@storybook/react";

import BackgroundImageArticle from "../background-image";

const meta = {
  title: "sections/Publisher UI/Article with Background Image",
  component: BackgroundImageArticle,
} satisfies Meta<typeof BackgroundImageArticle>;

export default meta;

type Story = StoryObj<typeof BackgroundImageArticle>;

export const Default: Story = {
  render: () => <BackgroundImageArticle />,
};
