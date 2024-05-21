import type { Meta, StoryObj } from "@storybook/react";

import { UpdateUserModalFileUpload } from "~/components/sections/update-modals/user-file-upload";

const meta = {
  title: "sections/update-modals/user-file-upload",
  component: UpdateUserModalFileUpload,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateUserModalFileUpload>;

export default meta;

type Story = StoryObj<typeof UpdateUserModalFileUpload>;

export const Default: Story = {
  render: () => <UpdateUserModalFileUpload />,
};
