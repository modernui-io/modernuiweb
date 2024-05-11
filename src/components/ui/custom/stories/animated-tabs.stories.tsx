import type { Meta, StoryObj } from "@storybook/react";

import { AnimatedTabs } from "~/components/ui/custom/animated-tabs";

/**
 * A custom animated tabs component.
 */
const meta: Meta<typeof AnimatedTabs> = {
  title: "custom/AnimatedTabs",
  component: AnimatedTabs,
  tags: ["autodocs"],
  args: {
    tabs: [
      { title: "Tab 1", content: "Content 1", value: "tab1" },
      { title: "Tab 2", content: "Content 2", value: "tab2" },
      { title: "Tab 3", content: "Content 3", value: "tab3" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof AnimatedTabs>;

/**
 * The default form of the animated tabs.
 */
export const Default: Story = {
  render: (args) => <AnimatedTabs {...args} />,
};
