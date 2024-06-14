import type { Meta, StoryObj } from "@storybook/react";

import { DefaultForm } from "../default-form";

const meta = {
  title: "sections/application-ui/update-forms/Default Form",
  component: DefaultForm,
} satisfies Meta<typeof DefaultForm>;

export default meta;

type Story = StoryObj<typeof DefaultForm>;

export const Default: Story = {
  render: () => <DefaultForm />,
};
