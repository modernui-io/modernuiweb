import type { Meta, StoryObj } from "@storybook/react";

import { GridLayoutCards } from "../grid-layout-cards";

const meta = {
  title: "sections/Marketing UI/Team/Grid Layout Cards",
  component: GridLayoutCards,
} satisfies Meta<typeof GridLayoutCards>;

export default meta;

type Story = StoryObj<typeof GridLayoutCards>;

export const Default: Story = {
  render: () => <GridLayoutCards />,
};
