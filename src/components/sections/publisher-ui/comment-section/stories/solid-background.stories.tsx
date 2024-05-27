import type { Meta, StoryObj } from "@storybook/react";
import { CommentsSolidBackground } from "../solid-background";


const meta = {
  title: "sections/Publisher UI/Comments/Comments with solid background",
  component: CommentsSolidBackground,
} satisfies Meta<typeof CommentsSolidBackground>;

export default meta;

type Story = StoryObj<typeof CommentsSolidBackground>;

export const Default: Story = {
  render: () => <CommentsSolidBackground />,
};
