import type { Meta, StoryObj } from "@storybook/react";

import { CreateModalWithAccordion } from "~/components/sections/create-modals/accordion";

const meta = {
  title: "sections/create-modals/accordion",
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
