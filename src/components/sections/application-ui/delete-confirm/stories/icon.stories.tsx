import type { Meta, StoryObj } from "@storybook/react";

import { DeleteConfirmationWithIcon } from "~/components/sections/application-ui/delete-confirm/icon";

const meta = {
  title: "sections/application-ui/delete-confirm/icon",
  component: DeleteConfirmationWithIcon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DeleteConfirmationWithIcon>;

export default meta;

type Story = StoryObj<typeof DeleteConfirmationWithIcon>;

export const Default: Story = {
  render: () => <DeleteConfirmationWithIcon />,
};
