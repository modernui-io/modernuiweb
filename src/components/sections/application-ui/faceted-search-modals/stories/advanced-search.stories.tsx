import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedSearch } from "../advanced-search";

const meta = {
  title: "sections/application-ui/search-modals/Advanced Search",
  component: AdvancedSearch,
} satisfies Meta<typeof AdvancedSearch>;

export default meta;

type Story = StoryObj<typeof AdvancedSearch>;

export const Default: Story = {
  render: () => <AdvancedSearch />,
};
