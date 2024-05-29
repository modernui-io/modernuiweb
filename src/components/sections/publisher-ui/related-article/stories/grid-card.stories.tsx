import type { Meta, StoryObj } from "@storybook/react";

import GridLayoutCard from "../grid-card";

const meta = {
  title: "sections/Publisher UI/Related Article/Grid layout card",
  component: GridLayoutCard,
} satisfies Meta<typeof GridLayoutCard>;

export default meta;

type Story = StoryObj<typeof GridLayoutCard>;

export const Default: Story = {
  render: () => <GridLayoutCard />,
};
