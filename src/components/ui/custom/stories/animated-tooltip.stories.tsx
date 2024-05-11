import type { Meta, StoryObj } from "@storybook/react";

import { AnimatedTooltip } from "~/components/ui/custom/animated-tooltip";

/**
 * An animated tooltip component.
 */
const meta: Meta<typeof AnimatedTooltip> = {
  title: "custom/AnimatedTooltip",
  component: AnimatedTooltip,
  tags: ["autodocs"],
  args: {
    items: [
      {
        id: 1,
        name: "Item 1",
        image: "https://via.placeholder.com/32",
      },
      {
        id: 2,
        name: "Item 2",
        image: "https://via.placeholder.com/32",
      },
      {
        id: 3,
        name: "Item 3",
        image: "https://via.placeholder.com/32",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof AnimatedTooltip>;

/**
 * The default form of the animated tooltip.
 */
export const Default: Story = {
  render: (args) => <AnimatedTooltip {...args} />,
};
