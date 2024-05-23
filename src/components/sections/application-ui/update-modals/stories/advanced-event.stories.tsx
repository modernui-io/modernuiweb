import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedUpdateEventModal } from "~/components/sections/application-ui/update-modals/advanced-event";

const meta = {
  title: "sections/application-ui/update-modals/advanced-event",
  component: AdvancedUpdateEventModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedUpdateEventModal>;

export default meta;

type Story = StoryObj<typeof AdvancedUpdateEventModal>;

export const Default: Story = {
  render: () => <AdvancedUpdateEventModal />,
};
