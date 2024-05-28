import type { Meta, StoryObj } from "@storybook/react";

import { EmailSignUpWithVideoHero } from "../email-signup-video";

const meta = {
  title: "sections/marketing-ui/hero-sections/Email Signup Video",
  component: EmailSignUpWithVideoHero,
} satisfies Meta<typeof EmailSignUpWithVideoHero>;

export default meta;

type Story = StoryObj<typeof EmailSignUpWithVideoHero>;

export const Default: Story = {
  render: () => <EmailSignUpWithVideoHero />,
};
