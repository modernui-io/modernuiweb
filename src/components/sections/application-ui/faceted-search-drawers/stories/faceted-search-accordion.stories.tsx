import type { Meta, StoryObj } from "@storybook/react";

import { FacetedSearchAccordion } from "../faceted-search-accordion";

const meta = {
  title:
    "sections/application-ui/faceted-search-drawers/Faceted Search With Accordion",
  component: FacetedSearchAccordion,
} satisfies Meta<typeof FacetedSearchAccordion>;

export default meta;

type Story = StoryObj<typeof FacetedSearchAccordion>;

export const Default: Story = {
  render: () => <FacetedSearchAccordion />,
};
