import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedReadEventSection } from "~/components/sections/application-ui/read-sections/advanced-event";

const meta = {
  title: "sections/application-ui/read-sections/advanced-event",
  component: AdvancedReadEventSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedReadEventSection>;

export default meta;

type Story = StoryObj<typeof AdvancedReadEventSection>;

export const Default: Story = {
  render: () => <AdvancedReadEventSection />,
};
