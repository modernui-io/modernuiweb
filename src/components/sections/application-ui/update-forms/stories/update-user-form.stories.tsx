import type { Meta, StoryObj } from "@storybook/react";

import { UpdateUserForm } from "../update-user-form";

const meta = {
  title: "sections/application-ui/update-forms/Update User Form",
  component: UpdateUserForm,
} satisfies Meta<typeof UpdateUserForm>;

export default meta;

type Story = StoryObj<typeof UpdateUserForm>;

export const Default: Story = {
  render: () => <UpdateUserForm />,
};
