import type { Meta, StoryObj } from "@storybook/react";

import { FeatureListIcons } from "../feature-list-icons";

const meta = {
  title: "sections/marketing-ui/feature-sections/feature-list-icons",
  component: FeatureListIcons,
} satisfies Meta<typeof FeatureListIcons>;

export default meta;

type Story = StoryObj<typeof FeatureListIcons>;

export const Default: Story = {
  render: () => <FeatureListIcons />,
};
