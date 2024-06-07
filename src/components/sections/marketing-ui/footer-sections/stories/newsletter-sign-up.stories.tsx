import type { Meta, StoryObj } from "@storybook/react";

import { NewsLetterSignUp } from "../newsletter-sign-up";

const meta = {
  title:
    "sections/Marketing UI/Footers/Newsletter Sign Up and address location",
  component: NewsLetterSignUp,
} satisfies Meta<typeof NewsLetterSignUp>;

export default meta;

type Story = StoryObj<typeof NewsLetterSignUp>;

export const Default: Story = {
  render: () => <NewsLetterSignUp />,
};
