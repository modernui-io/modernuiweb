import type { Meta, StoryObj } from "@storybook/react";

import { If } from "~/components/ui/custom/if";

/**
 * A custom if component.
 */
const meta: Meta<typeof If> = {
  title: "custom/If",
  component: If,
  tags: ["autodocs"],
  args: {
    condition: true,
  },
  argTypes: {
    condition: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof If>;

/**
 * The default form of the if.
 */
export const Default: Story = {
  render: (args) => (
    <If {...args}>
      <div>Condition is true</div>
    </If>
  ),
};
