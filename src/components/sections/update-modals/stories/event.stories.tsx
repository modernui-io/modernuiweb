import type { Meta, StoryObj } from "@storybook/react";

import { UpdateEventModal } from "~/components/sections/update-modals/event";

const meta = {
  title: "sections/update-modals/event",
  component: UpdateEventModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateEventModal>;

export default meta;

type Story = StoryObj<typeof UpdateEventModal>;

export const Default: Story = {
  render: () => <UpdateEventModal />,
};
