import type { Meta, StoryObj } from "@storybook/react";

import { BackgroundImageContactForm } from "../background-image-contact-form";

const meta = {
  title: "sections/Marketing UI/Contact Forms/Background Image Contact Form",
  component: BackgroundImageContactForm,
} satisfies Meta<typeof BackgroundImageContactForm>;

export default meta;

type Story = StoryObj<typeof BackgroundImageContactForm>;

export const Default: Story = {
  render: () => <BackgroundImageContactForm />,
};
