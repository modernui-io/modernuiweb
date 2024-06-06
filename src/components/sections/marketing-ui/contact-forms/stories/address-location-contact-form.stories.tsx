import type { Meta, StoryObj } from "@storybook/react";

import { AddressLocationContactForm } from "../address-location-contact-form";

const meta = {
  title: "sections/Marketing UI/Contact Forms/Address Location Contact Form",
  component: AddressLocationContactForm,
} satisfies Meta<typeof AddressLocationContactForm>;

export default meta;

type Story = StoryObj<typeof AddressLocationContactForm>;

export const Default: Story = {
  render: () => <AddressLocationContactForm />,
};
