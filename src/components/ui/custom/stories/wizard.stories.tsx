import type { Meta, StoryObj } from "@storybook/react";

import { Wizard } from "~/components/ui/custom/wizard";

/**
 * A custom wizard component.
 */
const meta: Meta<typeof Wizard> = {
  title: "custom/Wizard",
  component: Wizard,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof Wizard>;

/**
 * All Variants of the wizard.
 */
export const AllVariants: Story = {
  render: (args) => <Wizard {...args} />,
};
