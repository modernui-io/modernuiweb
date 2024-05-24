import type { Meta, StoryObj } from "@storybook/react";

import { DeleteConfirmationWithItemsList } from "~/components/sections/application-ui/delete-confirm/items-list";

const meta = {
  title: "sections/application-ui/delete-confirm/items-list",
  component: DeleteConfirmationWithItemsList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DeleteConfirmationWithItemsList>;

export default meta;

type Story = StoryObj<typeof DeleteConfirmationWithItemsList>;

export const Default: Story = {
  render: () => <DeleteConfirmationWithItemsList />,
};
