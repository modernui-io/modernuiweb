import type { Meta, StoryObj } from "@storybook/react";

import { DefaultFacetedSearchDrawer } from "../default-faceted-search-drawer";

const meta = {
  title:
    "sections/application-ui/faceted-search-drawers/Default Faceted Search Drawer",
  component: DefaultFacetedSearchDrawer,
} satisfies Meta<typeof DefaultFacetedSearchDrawer>;

export default meta;

type Story = StoryObj<typeof DefaultFacetedSearchDrawer>;

export const Default: Story = {
  render: () => <DefaultFacetedSearchDrawer />,
};
