import type { Meta, StoryObj } from "@storybook/react";

import { FeatureIconsCta } from "../feature-icons-cta";

const meta = {
  title: "sections/Marketing UI/Feature/Feature Icon CTA",
  component: FeatureIconsCta,
} satisfies Meta<typeof FeatureIconsCta>;

export default meta;

type Story = StoryObj<typeof FeatureIconsCta>;

export const Default: Story = {
  render: () => <FeatureIconsCta />,
};
