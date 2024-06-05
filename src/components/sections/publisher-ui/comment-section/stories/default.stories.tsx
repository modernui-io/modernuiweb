import type { Meta, StoryObj } from "@storybook/react";

import { DefaultCommentSection } from "../default";

const meta = {
  title: "sections/Publisher UI/Comments/Default Comment section",
  component: DefaultCommentSection,
} satisfies Meta<typeof DefaultCommentSection>;

export default meta;

type Story = StoryObj<typeof DefaultCommentSection>;

export const Default: Story = {
  render: () => <DefaultCommentSection />,
};
