import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListImageCTA } from "../feature-list-image-cta";

const meta = {
  title: "sections/marketing-ui/feature-sections/feature-list-with-image-cta",
  component: FeatureListImageCTA,
} satisfies Meta<typeof FeatureListImageCTA>;

export default meta;

type Story = StoryObj<typeof FeatureListImageCTA>;

export const Default: Story = {
  render: () => <FeatureListImageCTA />,
};
