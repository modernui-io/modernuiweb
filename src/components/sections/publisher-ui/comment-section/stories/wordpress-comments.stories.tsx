import type { Meta, StoryObj } from "@storybook/react";
import WordpressComments from "../wordpress-comments";


const meta = {
  title: "sections/Publisher UI/Comments/Wordpress Comments",
  component: WordpressComments,
} satisfies Meta<typeof WordpressComments>;

export default meta;

type Story = StoryObj<typeof WordpressComments>;

export const Default: Story = {
  render: () => <WordpressComments />,
};
