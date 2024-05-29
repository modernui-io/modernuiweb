import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedUserReadModal } from "~/components/sections/application-ui/read-modals/advanced-user";

const meta = {
  title: "sections/application-ui/read-modals/advanced-user",
  component: AdvancedUserReadModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedUserReadModal>;

export default meta;

type Story = StoryObj<typeof AdvancedUserReadModal>;

export const Default: Story = {
  render: () => <AdvancedUserReadModal />,
};
