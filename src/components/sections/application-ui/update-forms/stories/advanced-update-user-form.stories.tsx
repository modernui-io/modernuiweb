import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedUpdateUserForm } from "../advanced-update-user-form";

const meta = {
  title: "sections/application-ui/update-forms/Advanced Update User Form",
  component: AdvancedUpdateUserForm,
} satisfies Meta<typeof AdvancedUpdateUserForm>;

export default meta;

type Story = StoryObj<typeof AdvancedUpdateUserForm>;

export const Default: Story = {
  render: () => <AdvancedUpdateUserForm />,
};
