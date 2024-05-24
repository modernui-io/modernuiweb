import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedComparisonTable } from "~/components/sections/application-ui/advanced-tables/comparison";

const meta = {
  title: "sections/application-ui/advanced-tables/comparison",
  component: AdvancedComparisonTable,
} satisfies Meta<typeof AdvancedComparisonTable>;

export default meta;

type Story = StoryObj<typeof AdvancedComparisonTable>;

export const Default: Story = {
  render: () => <AdvancedComparisonTable />,
};
