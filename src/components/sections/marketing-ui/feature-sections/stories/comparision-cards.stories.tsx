import type { Meta, StoryObj } from "@storybook/react";

import { ComparisonCards } from "../comparison-cards";

const meta = {
  title: "sections/marketing-ui/feature-sections/comparison-cards",
  component: ComparisonCards,
} satisfies Meta<typeof ComparisonCards>;

export default meta;

type Story = StoryObj<typeof ComparisonCards>;

export const Default: Story = {
  render: () => <ComparisonCards />,
};
