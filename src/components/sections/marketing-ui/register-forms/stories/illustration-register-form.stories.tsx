import type { Meta, StoryObj } from "@storybook/react";

import { IllustrationRegisterForm } from "../illustration-register-form";

const meta = {
  title: "sections/marketing-ui/Register Sections/Illustration Register Form",
  component: IllustrationRegisterForm,
} satisfies Meta<typeof IllustrationRegisterForm>;

export default meta;

type Story = StoryObj<typeof IllustrationRegisterForm>;

export const Default: Story = {
  render: () => <IllustrationRegisterForm />,
};
