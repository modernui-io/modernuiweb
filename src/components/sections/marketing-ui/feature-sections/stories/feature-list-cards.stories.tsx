import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListCards } from "../feature-list-cards";

const meta = {
  title: "sections/marketing-ui/feature-sections/feature-list-cards",
  component: FeatureListCards,
} satisfies Meta<typeof FeatureListCards>;

export default meta;

type Story = StoryObj<typeof FeatureListCards>;

export const Default: Story = {
  render: () => <FeatureListCards />,
};
