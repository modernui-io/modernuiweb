import type { Meta, StoryObj } from "@storybook/react";

import { BackgroundImageCardsHero } from "../grid-cards";

const meta = {
  title: "sections/marketing-ui/hero-sections/gift-cards",
  component: BackgroundImageCardsHero,
} satisfies Meta<typeof BackgroundImageCardsHero>;

export default meta;

type Story = StoryObj<typeof BackgroundImageCardsHero>;

export const Default: Story = {
  render: () => <BackgroundImageCardsHero />,
};
