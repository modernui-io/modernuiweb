import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "~/components/ui/button";
import { ResponsiveTooltip } from "~/components/ui/custom/responsive-tooltip";

/**
 * A custom responsive tooltip component.
 */

const meta: Meta<typeof ResponsiveTooltip> = {
  title: "custom/ResponsiveTooltip",
  component: ResponsiveTooltip,
  tags: ["autodocs"],
  args: {
    content: "This is a tooltip",
  },
};

export default meta;

type Story = StoryObj<typeof ResponsiveTooltip>;

/**
 * A responsive tooltip component.
 */
export const Default: Story = {
  render: (args) => (
    <ResponsiveTooltip {...args}>
      <Button>Hover me</Button>
    </ResponsiveTooltip>
  ),
};
