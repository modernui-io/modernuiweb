import type { Meta, StoryObj } from "@storybook/react";

import { DefaultReadModal } from "~/components/sections/application-ui/read-modals/default";

const meta = {
  title: "sections/application-ui/read-modals/default",
  component: DefaultReadModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultReadModal>;

export default meta;

type Story = StoryObj<typeof DefaultReadModal>;

export const Default: Story = {
  render: () => <DefaultReadModal />,
};
