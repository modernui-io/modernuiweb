import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmDeleteWithAlert } from "~/components/sections/application-ui/delete-confirm/alert";

const meta = {
  title: "sections/application-ui/delete-confirm/alert",
  component: ConfirmDeleteWithAlert,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ConfirmDeleteWithAlert>;

export default meta;

type Story = StoryObj<typeof ConfirmDeleteWithAlert>;

export const Default: Story = {
  render: () => <ConfirmDeleteWithAlert />,
};
