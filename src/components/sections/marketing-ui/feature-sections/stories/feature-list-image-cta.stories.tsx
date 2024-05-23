import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListImageCTA } from "../feature-list-image-cta";

const meta = {
  title: "sections/Marketing UI/Feature/Feature List with Image CTA",
  component: FeatureListImageCTA,
} satisfies Meta<typeof FeatureListImageCTA>;

export default meta;

type Story = StoryObj<typeof FeatureListImageCTA>;

export const Default: Story = {
  render: () => <FeatureListImageCTA />,
};
