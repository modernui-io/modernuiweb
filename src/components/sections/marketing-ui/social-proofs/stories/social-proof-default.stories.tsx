import type { Meta, StoryObj } from "@storybook/react";

import { SocialProofDefault } from "../social-proof-default";

const meta = {
  title: "sections/Marketing UI/Social Proofs/Social Proof Default",
  component: SocialProofDefault,
} satisfies Meta<typeof SocialProofDefault>;

export default meta;

type Story = StoryObj<typeof SocialProofDefault>;

export const Default: Story = {
  render: () => <SocialProofDefault />,
};
