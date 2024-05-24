import type { Meta, StoryObj } from "@storybook/react";

import { CreateModalWithAccordion } from "~/components/sections/application-ui/create-modals/accordion";

const meta = {
  title: "sections/application-ui/create-modals/accordion",
  component: CreateModalWithAccordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateModalWithAccordion>;

export default meta;

type Story = StoryObj<typeof CreateModalWithAccordion>;

export const Default: Story = {
  render: () => <CreateModalWithAccordion />,
};
