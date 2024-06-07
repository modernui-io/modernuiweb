import type { Meta, StoryObj } from "@storybook/react";

import { CompanyInfoContactForm } from "../company-info-contact-form";

const meta = {
  title: "sections/Marketing UI/Contact Forms/Company Info Contact Form",
  component: CompanyInfoContactForm,
} satisfies Meta<typeof CompanyInfoContactForm>;

export default meta;

type Story = StoryObj<typeof CompanyInfoContactForm>;

export const Default: Story = {
  render: () => <CompanyInfoContactForm />,
};
