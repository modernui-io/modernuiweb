import type { Meta, StoryObj } from "@storybook/react";

import { CreateEventModal } from "~/components/sections/application-ui/create-modals/event";

const meta = {
  title: "sections/application-ui/create-modals/event",
  component: CreateEventModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateEventModal>;

export default meta;

type Story = StoryObj<typeof CreateEventModal>;

export const Default: Story = {
  render: () => <CreateEventModal />,
};
