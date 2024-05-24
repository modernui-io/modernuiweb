import type { Meta, StoryObj } from "@storybook/react";

import { IllustrationWithEmailSignupHero } from "../illustration";

const meta = {
  title: "sections/marketing-ui/hero-sections/Illustrations",
  component: IllustrationWithEmailSignupHero,
} satisfies Meta<typeof IllustrationWithEmailSignupHero>;

export default meta;

type Story = StoryObj<typeof IllustrationWithEmailSignupHero>;

export const Default: Story = {
  render: () => <IllustrationWithEmailSignupHero />,
};
