import type { Meta, StoryObj } from "@storybook/react";

import { SubmitForm } from "../submit-form";

const meta = {
  title:
    "sections/E-Commerce UI/Product Reviews/Product reviews with submit form",
  component: SubmitForm,
} satisfies Meta<typeof SubmitForm>;

export default meta;

type Story = StoryObj<typeof SubmitForm>;

export const Default: Story = {
  render: () => <SubmitForm />,
};
