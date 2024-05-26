import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListAlternateImage } from "../feature-list-alternate-image";

const meta = {
  title: "sections/Marketing UI/Feature/Feature List with Alternate Image",
  component: FeatureListAlternateImage,
} satisfies Meta<typeof FeatureListAlternateImage>;

export default meta;

type Story = StoryObj<typeof FeatureListAlternateImage>;

export const Default: Story = {
  render: () => <FeatureListAlternateImage />,
};
