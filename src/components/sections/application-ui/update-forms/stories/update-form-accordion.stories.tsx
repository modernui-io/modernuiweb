import type { Meta, StoryObj } from "@storybook/react";

import { UpdateFormAccordion } from "../update-form-accordion";

const meta = {
  title: "sections/application-ui/update-forms/Update Form with Accordion",
  component: UpdateFormAccordion,
} satisfies Meta<typeof UpdateFormAccordion>;

export default meta;

type Story = StoryObj<typeof UpdateFormAccordion>;

export const Default: Story = {
  render: () => <UpdateFormAccordion />,
};
