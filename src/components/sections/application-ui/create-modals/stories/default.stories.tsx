import type { Meta, StoryObj } from "@storybook/react";

import { DefaultCreateModal } from "~/components/sections/application-ui/create-modals/default";

const meta = {
  title: "sections/application-ui/create-modals/default",
  component: DefaultCreateModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultCreateModal>;

export default meta;

type Story = StoryObj<typeof DefaultCreateModal>;

export const Default: Story = {
  render: () => <DefaultCreateModal />,
};
