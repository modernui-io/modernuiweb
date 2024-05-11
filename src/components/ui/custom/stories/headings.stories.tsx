import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "~/components/ui/custom/headings";

/**
 * A custom heading component.
 */
const meta: Meta<typeof Heading> = {
  title: "custom/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    level: 1,
    children: "Heading",
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

/**
 * All Variants of the heading.
 */
export const AllVariants: Story = {
  render: (args) => (
    <>
      <Heading {...args} level={1}>
        Heading 1
      </Heading>
      <Heading {...args} level={2}>
        Heading 2
      </Heading>
      <Heading {...args} level={3}>
        Heading 3
      </Heading>
      <Heading {...args} level={4}>
        Heading 4
      </Heading>
      <Heading {...args} level={5}>
        Heading 5
      </Heading>
      <Heading {...args} level={6}>
        Heading 6
      </Heading>
    </>
  ),
};
