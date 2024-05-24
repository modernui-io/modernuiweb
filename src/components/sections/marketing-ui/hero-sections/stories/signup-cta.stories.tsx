import type { Meta, StoryObj } from "@storybook/react";

import { SignUpFormWithCTAHero } from "../signup-cta";

const meta = {
  title: "sections/marketing-ui/hero-sections/Signup CTA",
  component: SignUpFormWithCTAHero,
} satisfies Meta<typeof SignUpFormWithCTAHero>;

export default meta;

type Story = StoryObj<typeof SignUpFormWithCTAHero>;

export const Default: Story = {
  render: () => <SignUpFormWithCTAHero />,
};
