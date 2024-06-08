import type { Meta, StoryObj } from "@storybook/react";

import { SocialContent } from "../social-content";

const meta = {
  title: "sections/Marketing UI/Content/Social Proof Content",
  component: SocialContent,
} satisfies Meta<typeof SocialContent>;

export default meta;

type Story = StoryObj<typeof SocialContent>;

export const Default: Story = {
  render: () => <SocialContent />,
};
