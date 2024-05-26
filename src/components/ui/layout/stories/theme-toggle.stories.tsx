import type { Meta, StoryObj } from "@storybook/react";

import { ThemeToggle } from "~/components/ui/layout/theme-toggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "layout/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  render: (args) => <ThemeToggle />,
};
