import type { Meta, StoryObj } from "@storybook/react";

import { ComparisonTable } from "../comparison-table";

const meta = {
  title: "sections/Marketing UI/Pricing Forms/Comparison Table",
  component: ComparisonTable,
} satisfies Meta<typeof ComparisonTable>;

export default meta;

type Story = StoryObj<typeof ComparisonTable>;

export const Default: Story = {
  render: () => <ComparisonTable />,
};
