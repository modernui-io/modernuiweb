import type { Meta, StoryObj } from "@storybook/react";

import { ReadEventModal } from "~/components/sections/application-ui/read-modals/event";

const meta = {
  title: "sections/application-ui/read-modals/event",
  component: ReadEventModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReadEventModal>;

export default meta;

type Story = StoryObj<typeof ReadEventModal>;

export const Default: Story = {
  render: () => <ReadEventModal />,
};
