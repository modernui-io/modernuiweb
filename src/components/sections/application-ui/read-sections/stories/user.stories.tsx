import type { Meta, StoryObj } from "@storybook/react";

import { ReadUserSection } from "~/components/sections/application-ui/read-sections/user";

const meta = {
  title: "sections/application-ui/read-sections/user",
  component: ReadUserSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReadUserSection>;

export default meta;

type Story = StoryObj<typeof ReadUserSection>;

export const Default: Story = {
  render: () => <ReadUserSection />,
};
