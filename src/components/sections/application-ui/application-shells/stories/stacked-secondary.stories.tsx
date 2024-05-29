import type { Meta, StoryObj } from "@storybook/react";

import { StackedSecondaryApplicationShell } from "~/components/sections/application-ui/application-shells/stacked-secondary";

const meta = {
  title: "sections/application-ui/application-shells/stacked-secondary",
  component: StackedSecondaryApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StackedSecondaryApplicationShell>;

export default meta;

type Story = StoryObj<typeof StackedSecondaryApplicationShell>;

export const Default: Story = {
  render: () => <StackedSecondaryApplicationShell />,
};
