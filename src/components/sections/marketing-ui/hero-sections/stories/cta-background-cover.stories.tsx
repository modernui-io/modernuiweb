import type { Meta, StoryObj } from "@storybook/react";

import { BackgroundCoverImageWithCTAsHero } from "../cta-background-cover";

const meta = {
  title: "sections/marketing-ui/hero-sections/cta-background-cover",
  component: BackgroundCoverImageWithCTAsHero,
} satisfies Meta<typeof BackgroundCoverImageWithCTAsHero>;

export default meta;

type Story = StoryObj<typeof BackgroundCoverImageWithCTAsHero>;

export const Default: Story = {
  render: () => <BackgroundCoverImageWithCTAsHero />,
};
