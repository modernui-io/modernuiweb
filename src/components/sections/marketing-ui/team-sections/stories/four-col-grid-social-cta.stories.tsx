import type { Meta, StoryObj } from "@storybook/react";

import { FourColGridSocialCTA } from "../four-col-grid-social-cta";

const meta = {
  title: "sections/Marketing UI/Team/Four Column Grid, Social and CTA",
  component: FourColGridSocialCTA,
} satisfies Meta<typeof FourColGridSocialCTA>;

export default meta;

type Story = StoryObj<typeof FourColGridSocialCTA>;

export const Default: Story = {
  render: () => <FourColGridSocialCTA />,
};
