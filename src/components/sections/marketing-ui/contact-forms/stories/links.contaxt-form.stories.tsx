import type { Meta, StoryObj } from "@storybook/react";

import { LinkContactForm } from "../links-contact-form";

const meta = {
  title: "sections/Marketing UI/Contact Forms/Contact Form with Links",
  component: LinkContactForm,
} satisfies Meta<typeof LinkContactForm>;

export default meta;

type Story = StoryObj<typeof LinkContactForm>;

export const Default: Story = {
  render: () => <LinkContactForm />,
};
