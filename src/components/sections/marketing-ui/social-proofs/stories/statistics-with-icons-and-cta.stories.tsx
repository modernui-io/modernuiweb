import type { Meta, StoryObj } from "@storybook/react";

import { StatisticsWithIconsAndCta } from "../statistics-with-icons-and-cta";

const meta = {
  title: "sections/Marketing UI/Social Proofs/Statistics With Icons And Cta ",
  component: StatisticsWithIconsAndCta,
} satisfies Meta<typeof StatisticsWithIconsAndCta>;

export default meta;

type Story = StoryObj<typeof StatisticsWithIconsAndCta>;

export const Default: Story = {
  render: () => <StatisticsWithIconsAndCta />,
};
