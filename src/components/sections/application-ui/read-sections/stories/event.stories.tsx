import type { Meta, StoryObj } from "@storybook/react";

import { ReadEventSection } from "~/components/sections/application-ui/read-sections/event";

const meta = {
  title: "sections/application-ui/read-sections/event",
  component: ReadEventSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReadEventSection>;

export default meta;

type Story = StoryObj<typeof ReadEventSection>;

export const Default: Story = {
  render: () => <ReadEventSection />,
};
