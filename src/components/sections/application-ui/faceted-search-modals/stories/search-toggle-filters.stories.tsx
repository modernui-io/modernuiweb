import type { Meta, StoryObj } from "@storybook/react";

import { SearchToggleFilters } from "../search-toggle-filters";

const meta = {
  title: "sections/application-ui/search-modals/Search Toggle Filters",
  component: SearchToggleFilters,
} satisfies Meta<typeof SearchToggleFilters>;

export default meta;

type Story = StoryObj<typeof SearchToggleFilters>;

export const Default: Story = {
  render: () => <SearchToggleFilters />,
};
