import type { Meta, StoryObj } from "@storybook/react";

import { GridLayoutClean } from "../grid-layout-clean";

const meta = {
  title: "sections/Marketing UI/Team/Grid Layout Clean",
  component: GridLayoutClean,
} satisfies Meta<typeof GridLayoutClean>;

export default meta;

type Story = StoryObj<typeof GridLayoutClean>;

export const Default: Story = {
  render: () => <GridLayoutClean />,
};
