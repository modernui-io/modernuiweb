import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListDescriptionIcons } from "../feature-list-desc-icons";

const meta = {
  title:
    "sections/Marketing UI/Feature/Feature List Description Icons",
  component: FeatureListDescriptionIcons,
} satisfies Meta<typeof FeatureListDescriptionIcons>;

export default meta;

type Story = StoryObj<typeof FeatureListDescriptionIcons>;

export const Default: Story = {
  render: () => <FeatureListDescriptionIcons />,
};
