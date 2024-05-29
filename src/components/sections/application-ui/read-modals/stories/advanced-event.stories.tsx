import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedReadEventModal } from "~/components/sections/application-ui/read-modals/advanced-event";

const meta = {
  title: "sections/application-ui/read-modals/advanced-event",
  component: AdvancedReadEventModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedReadEventModal>;

export default meta;

type Story = StoryObj<typeof AdvancedReadEventModal>;

export const Default: Story = {
  render: () => <AdvancedReadEventModal />,
};
