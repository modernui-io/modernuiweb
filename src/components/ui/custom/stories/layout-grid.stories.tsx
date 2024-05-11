import type { Meta, StoryObj } from "@storybook/react";

import { LayoutGrid } from "~/components/ui/custom/layout-grid";

/**
 * A custom layout grid component.
 */
const meta: Meta<typeof LayoutGrid> = {
  title: "custom/LayoutGrid",
  component: LayoutGrid,
  tags: ["autodocs"],
  args: {
    cards: [
      {
        id: 1,
        content: "Card 1",
        className: "bg-red-500",
        thumbnail: "https://via.placeholder.com/32",
      },
      {
        id: 2,
        content: "Card 2",
        className: "bg-blue-500",
        thumbnail: "https://via.placeholder.com/32",
      },
      {
        id: 3,
        content: "Card 3",
        className: "bg-green-500",
        thumbnail: "https://via.placeholder.com/32",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof LayoutGrid>;

/**
 * The default form of the layout grid.
 */
export const Default: Story = {
  render: (args) => <LayoutGrid {...args} />,
};
