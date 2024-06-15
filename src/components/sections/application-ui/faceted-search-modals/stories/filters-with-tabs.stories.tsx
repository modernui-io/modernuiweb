import type { Meta, StoryObj } from "@storybook/react";

import { FiltersWithTabs } from "../filters-with-tabs";

const meta = {
  title: "sections/application-ui/search-modals/Filters With Tabs",
  component: FiltersWithTabs,
} satisfies Meta<typeof FiltersWithTabs>;

export default meta;

type Story = StoryObj<typeof FiltersWithTabs>;

export const Default: Story = {
  render: () => <FiltersWithTabs />,
};
