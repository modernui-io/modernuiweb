import type { Meta, StoryObj } from "@storybook/react";

import { FeatureSectionsRoundedIcons } from "../feature-list-rounded-icons";

const meta = {
  title:
    "sections/marketing-ui/feature-sections/feature-list-with-rounded-icons",
  component: FeatureSectionsRoundedIcons,
} satisfies Meta<typeof FeatureSectionsRoundedIcons>;

export default meta;

type Story = StoryObj<typeof FeatureSectionsRoundedIcons>;

export const Default: Story = {
  render: () => <FeatureSectionsRoundedIcons />,
};
