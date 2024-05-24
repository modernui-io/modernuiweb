import type { Meta, StoryObj } from "@storybook/react";

import { DefaultAdvancedTable } from "~/components/sections/application-ui/advanced-tables/default";

const meta = {
  title: "sections/application-ui/advanced-tables/default",
  component: DefaultAdvancedTable,
} satisfies Meta<typeof DefaultAdvancedTable>;

export default meta;

type Story = StoryObj<typeof DefaultAdvancedTable>;

export const Default: Story = {
  render: () => <DefaultAdvancedTable />,
};
