import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListCTA } from "../feature-list-cta";

const meta = {
  title: "sections/marketing-ui/feature-sections/feature-list-cta",
  component: FeatureListCTA,
} satisfies Meta<typeof FeatureListCTA>;

export default meta;

type Story = StoryObj<typeof FeatureListCTA>;

export const Default: Story = {
  render: () => <FeatureListCTA />,
};
