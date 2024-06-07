import type { Meta, StoryObj } from "@storybook/react";

import { AuthRegisterForm } from "../auth-register-forms";

const meta = {
  title: "sections/marketing-ui/Register Sections/Authentication Register Form",
  component: AuthRegisterForm,
} satisfies Meta<typeof AuthRegisterForm>;

export default meta;

type Story = StoryObj<typeof AuthRegisterForm>;

export const Default: Story = {
  render: () => <AuthRegisterForm />,
};
