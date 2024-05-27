import type { Meta, StoryObj } from "@storybook/react";

import HorizontalCard from "../horizontal-card";

const meta = {
  title: "sections/Publisher UI/Related Article/Horizontal card with image",
  component: HorizontalCard,
} satisfies Meta<typeof HorizontalCard>;

export default meta;

type Story = StoryObj<typeof HorizontalCard>;

export const Default: Story = {
  render: () => <HorizontalCard />,
};
