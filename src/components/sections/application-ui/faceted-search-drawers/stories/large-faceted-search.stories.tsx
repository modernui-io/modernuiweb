import type { Meta, StoryObj } from "@storybook/react";

import { LargeFacetedSearch } from "../large-faceted-search";

const meta = {
  title:
    "sections/application-ui/faceted-search-drawers/Large Faceted Search With Multiple Options",
  component: LargeFacetedSearch,
} satisfies Meta<typeof LargeFacetedSearch>;

export default meta;

type Story = StoryObj<typeof LargeFacetedSearch>;

export const Default: Story = {
  render: () => <LargeFacetedSearch />,
};
