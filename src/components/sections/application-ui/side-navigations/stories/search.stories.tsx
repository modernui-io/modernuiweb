import type { Meta, StoryObj } from "@storybook/react";

import { SearchSideNavigation } from "~/components/sections/application-ui/side-navigations/search";

const meta = {
  title: "sections/application-ui/side-navigations/search",
  component: SearchSideNavigation,
} satisfies Meta<typeof SearchSideNavigation>;

export default meta;

type Story = StoryObj<typeof SearchSideNavigation>;

export const Default: Story = {
  render: () => <SearchSideNavigation />,
};
