import type { Meta, StoryObj } from "@storybook/react";

import { DeleteConfirmationWithInputField } from "~/components/sections/application-ui/delete-confirm/input-field";

const meta = {
  title: "sections/application-ui/delete-confirm/input-field",
  component: DeleteConfirmationWithInputField,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DeleteConfirmationWithInputField>;

export default meta;

type Story = StoryObj<typeof DeleteConfirmationWithInputField>;

export const Default: Story = {
  render: () => <DeleteConfirmationWithInputField />,
};
