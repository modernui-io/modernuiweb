import type { Meta, StoryObj } from "@storybook/react";

import { EmailSignUpCTASection } from "../email-signup";

const meta = {
  title: "sections/Marketing UI/CTAS/Email sign-up CTA",
  component: EmailSignUpCTASection,
} satisfies Meta<typeof EmailSignUpCTASection>;

export default meta;

type Story = StoryObj<typeof EmailSignUpCTASection>;

export const Default: Story = {
  render: () => <EmailSignUpCTASection />,
};
