import type { Meta, StoryObj } from "@storybook/react";

import { CardsWithStatistics } from "../cards-with-statistics";

const meta = {
  title: "sections/Marketing UI/Social Proofs/Cards With Statistics",
  component: CardsWithStatistics,
} satisfies Meta<typeof CardsWithStatistics>;

export default meta;

type Story = StoryObj<typeof CardsWithStatistics>;

export const Default: Story = {
  render: () => <CardsWithStatistics />,
};
