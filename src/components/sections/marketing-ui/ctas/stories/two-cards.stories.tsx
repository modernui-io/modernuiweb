import type { Meta, StoryObj } from "@storybook/react";

import { TwoCardsAndImagesCTASection } from "../two-cards";

const meta = {
  title: "sections/Marketing UI/CTAS/CTA with two cards and images",
  component: TwoCardsAndImagesCTASection,
} satisfies Meta<typeof TwoCardsAndImagesCTASection>;

export default meta;

type Story = StoryObj<typeof TwoCardsAndImagesCTASection>;

export const Default: Story = {
  render: () => <TwoCardsAndImagesCTASection />,
};
