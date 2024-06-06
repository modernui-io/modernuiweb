import type { Meta, StoryObj } from "@storybook/react";

import { HelpCentreContactForm } from "../help-centre-contact-form";

const meta = {
  title: "sections/Marketing UI/Contact Forms/Help Center Contact Form",
  component: HelpCentreContactForm,
} satisfies Meta<typeof HelpCentreContactForm>;

export default meta;

type Story = StoryObj<typeof HelpCentreContactForm>;

export const Default: Story = {
  render: () => <HelpCentreContactForm />,
};
