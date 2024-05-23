import type { Meta, StoryObj } from "@storybook/react";

import { DefaultUpdateModal } from "~/components/sections/application-ui/update-modals/default";

const meta = {
  title: "sections/application-ui/update-modals/default",
  component: DefaultUpdateModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultUpdateModal>;

export default meta;

type Story = StoryObj<typeof DefaultUpdateModal>;

export const Default: Story = {
  render: () => <DefaultUpdateModal />,
};
