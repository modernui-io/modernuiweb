import type { Meta, StoryObj } from "@storybook/react";

import { DefaultTableHeader } from "~/components/sections/table-headers/default";

const meta = {
  title: "sections/table-headers/default",
  component: DefaultTableHeader,
} satisfies Meta<typeof DefaultTableHeader>;

export default meta;

type Story = StoryObj<typeof DefaultTableHeader>;

export const Default: Story = {
  render: () => <DefaultTableHeader />,
};
