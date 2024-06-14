import type { Meta, StoryObj } from "@storybook/react";

import { CreateUserForm } from "../create-user-form";

const meta = {
  title: "sections/application-ui/create-forms/Create User Form",
  component: CreateUserForm,
} satisfies Meta<typeof CreateUserForm>;

export default meta;

type Story = StoryObj<typeof CreateUserForm>;

export const Default: Story = {
  render: () => <CreateUserForm />,
};
