import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedCreateEventModal } from "~/components/sections/application-ui/create-modals/advanced-event";

const meta = {
  title: "sections/application-ui/create-modals/advanced-event",
  component: AdvancedCreateEventModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedCreateEventModal>;

export default meta;

type Story = StoryObj<typeof AdvancedCreateEventModal>;

export const Default: Story = {
  render: () => <AdvancedCreateEventModal />,
};
