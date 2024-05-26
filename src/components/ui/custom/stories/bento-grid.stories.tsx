import {
  ActivityLogIcon,
  ArchiveIcon,
  BookmarkIcon,
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { BentoCard, BentoGrid } from "~/components/ui/custom/bento-grid";

/**
 * A custom bento grid component.
 */
const meta: Meta<typeof BentoGrid> = {
  title: "custom/BentoGrid",
  component: BentoGrid,
  tags: ["autodocs"],
  args: {
    children: [
      <BentoCard
        name="Card 1"
        background="https://via.placeholder.com/32"
        Icon={ActivityLogIcon}
        description="Description 1"
        href="/"
        key={1}
      />,
      <BentoCard
        name="Card 2"
        background="https://via.placeholder.com/32"
        Icon={ArchiveIcon}
        description="Description 2"
        href="/"
        key={2}
      />,
      <BentoCard
        name="Card 3"
        background="https://via.placeholder.com/32"
        Icon={BookmarkIcon}
        description="Description 3"
        href="/"
        key={3}
      />,
    ],
  },
};

export default meta;

type Story = StoryObj<typeof BentoGrid>;

/**
 * The default form of the bento grid.
 */
export const Default: Story = {
  render: (args) => <BentoGrid {...args} />,
};
