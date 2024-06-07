import type { Meta, StoryObj } from "@storybook/react";

import { SocialMediaIcons } from "../social_media-icons";

const meta = {
  title: "sections/Marketing UI/Footers/Social Media Icons",
  component: SocialMediaIcons,
} satisfies Meta<typeof SocialMediaIcons>;

export default meta;

type Story = StoryObj<typeof SocialMediaIcons>;

export const Default: Story = {
  render: () => <SocialMediaIcons />,
};
