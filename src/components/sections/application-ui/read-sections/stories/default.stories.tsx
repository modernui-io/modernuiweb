import type { Meta, StoryObj } from "@storybook/react";

import { DefaultReadSection } from "~/components/sections/application-ui/read-sections/default";

const meta = {
  title: "sections/application-ui/read-sections/default",
  component: DefaultReadSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultReadSection>;

export default meta;

type Story = StoryObj<typeof DefaultReadSection>;

export const Default: Story = {
  render: () => <DefaultReadSection />,
};
