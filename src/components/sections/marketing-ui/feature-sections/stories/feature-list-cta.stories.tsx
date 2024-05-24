import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListCTA } from "../feature-list-cta";

const meta = {
  title: "sections/Marketing UI/Feature/Feature List CTA",
  component: FeatureListCTA,
} satisfies Meta<typeof FeatureListCTA>;

export default meta;

type Story = StoryObj<typeof FeatureListCTA>;

export const Default: Story = {
  render: () => <FeatureListCTA />,
};
