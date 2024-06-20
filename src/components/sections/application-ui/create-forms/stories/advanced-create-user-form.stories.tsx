import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedCreateUserForm } from "../advanced-create-user-form";

const meta = {
  title: "sections/application-ui/create-forms/Advanced Create User Form",
  component: AdvancedCreateUserForm,
} satisfies Meta<typeof AdvancedCreateUserForm>;

export default meta;

type Story = StoryObj<typeof AdvancedCreateUserForm>;

export const Default: Story = {
  render: () => <AdvancedCreateUserForm />,
};
