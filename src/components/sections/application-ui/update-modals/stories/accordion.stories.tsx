import type { Meta, StoryObj } from "@storybook/react";

import { UpdateModalAccordion } from "~/components/sections/application-ui/update-modals/accordion";

const meta = {
  title: "sections/application-ui/update-modals/accordion",
  component: UpdateModalAccordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateModalAccordion>;

export default meta;

type Story = StoryObj<typeof UpdateModalAccordion>;

export const Default: Story = {
  render: () => <UpdateModalAccordion />,
};
