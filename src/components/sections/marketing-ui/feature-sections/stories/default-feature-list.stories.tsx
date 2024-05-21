import type { Meta, StoryObj } from "@storybook/react";

import { DefaultFeatureList } from "../default-feature-list";

const meta = {
  title: "sections/marketing-ui/feature-sections/default-feature-list",
  component: DefaultFeatureList,
} satisfies Meta<typeof DefaultFeatureList>;

export default meta;

type Story = StoryObj<typeof DefaultFeatureList>;

export const Default: Story = {
  render: () => <DefaultFeatureList />,
};
