import type { Meta, StoryObj } from "@storybook/react";

import { DefaultTableHeader } from "~/components/sections/application-ui/table-headers/default";

const meta = {
  title: "sections/application-ui/table-headers/default",
  component: DefaultTableHeader,
} satisfies Meta<typeof DefaultTableHeader>;

export default meta;

type Story = StoryObj<typeof DefaultTableHeader>;

export const Default: Story = {
  render: () => <DefaultTableHeader />,
};
