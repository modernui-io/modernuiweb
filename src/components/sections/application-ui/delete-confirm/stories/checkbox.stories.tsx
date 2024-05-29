import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmDeleteWithCheckbox } from "~/components/sections/application-ui/delete-confirm/checkbox";

const meta = {
  title: "sections/application-ui/delete-confirm/checkbox",
  component: ConfirmDeleteWithCheckbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ConfirmDeleteWithCheckbox>;

export default meta;

type Story = StoryObj<typeof ConfirmDeleteWithCheckbox>;

export const Default: Story = {
  render: () => <ConfirmDeleteWithCheckbox />,
};
