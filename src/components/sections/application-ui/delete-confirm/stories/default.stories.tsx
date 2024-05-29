import type { Meta, StoryObj } from "@storybook/react";

import { DefaultDeleteConfirmationModal } from "~/components/sections/application-ui/delete-confirm/default";

const meta = {
  title: "sections/application-ui/delete-confirm/default",
  component: DefaultDeleteConfirmationModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultDeleteConfirmationModal>;

export default meta;

type Story = StoryObj<typeof DefaultDeleteConfirmationModal>;

export const Default: Story = {
  render: () => <DefaultDeleteConfirmationModal />,
};
