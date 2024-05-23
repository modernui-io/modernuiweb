import type { Meta, StoryObj } from "@storybook/react";

import { MultiLevelTableHeadersWithFilters } from "~/components/sections/application-ui/table-headers/multi-level-filters";

const meta = {
  title: "sections/application-ui/table-headers/multi-level-filters",
  component: MultiLevelTableHeadersWithFilters,
} satisfies Meta<typeof MultiLevelTableHeadersWithFilters>;

export default meta;

type Story = StoryObj<typeof MultiLevelTableHeadersWithFilters>;

export const Default: Story = {
  render: () => <MultiLevelTableHeadersWithFilters />,
};
