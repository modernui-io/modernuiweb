import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListAlternateImage } from "../feature-list-alternate-image";

const meta = {
  title:
    "sections/marketing-ui/feature-sections/feature-list-with-alternate-image",
  component: FeatureListAlternateImage,
} satisfies Meta<typeof FeatureListAlternateImage>;

export default meta;

type Story = StoryObj<typeof FeatureListAlternateImage>;

export const Default: Story = {
  render: () => <FeatureListAlternateImage />,
};
