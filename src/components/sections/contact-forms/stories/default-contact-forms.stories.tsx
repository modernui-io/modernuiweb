import type { Meta, StoryObj } from "@storybook/react";

import { DefaultContactForm } from "../default-contact-forms";

const meta = {
  title: "sections/Marketing UI/Contact Forms/Default Contact Form",
  component: DefaultContactForm,
} satisfies Meta<typeof DefaultContactForm>;

export default meta;

type Story = StoryObj<typeof DefaultContactForm>;

export const Default: Story = {
  render: () => <DefaultContactForm />,
};
