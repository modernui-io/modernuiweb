import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedFacetedDatepicker } from "../advanced-faceted-datepicker";

const meta = {
  title:
    "sections/application-ui/faceted-search-drawers/Advanced Faceted With Datepicker",
  component: AdvancedFacetedDatepicker,
} satisfies Meta<typeof AdvancedFacetedDatepicker>;

export default meta;

type Story = StoryObj<typeof AdvancedFacetedDatepicker>;

export const Default: Story = {
  render: () => <AdvancedFacetedDatepicker />,
};
