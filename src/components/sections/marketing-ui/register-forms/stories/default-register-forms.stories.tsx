import type { Meta, StoryObj } from "@storybook/react";

import { DefaultRegisterForm } from "../default-register-forms";

const meta = {
  title: "sections/marketing-ui/Register Sections/Default Register Form",
  component: DefaultRegisterForm,
} satisfies Meta<typeof DefaultRegisterForm>;

export default meta;

type Story = StoryObj<typeof DefaultRegisterForm>;

export const Default: Story = {
  render: () => <DefaultRegisterForm />,
};
