import type { Meta, StoryObj } from "@storybook/react";

import { StackedMultipleApplicationShell } from "~/components/sections/application-ui/application-shells/stacked-multiple";

const meta = {
  title: "sections/application-ui/application-shells/stacked-multiple",
  component: StackedMultipleApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StackedMultipleApplicationShell>;

export default meta;

type Story = StoryObj<typeof StackedMultipleApplicationShell>;

export const Default: Story = {
  render: () => <StackedMultipleApplicationShell />,
};
