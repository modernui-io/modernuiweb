import type { Meta, StoryObj } from "@storybook/react";

import { CreateFormAccordion } from "../create-form-accordion";

const meta = {
  title: "sections/application-ui/create-forms/Create Form Accordion",
  component: CreateFormAccordion,
} satisfies Meta<typeof CreateFormAccordion>;

export default meta;

type Story = StoryObj<typeof CreateFormAccordion>;

export const Default: Story = {
  render: () => <CreateFormAccordion />,
};
