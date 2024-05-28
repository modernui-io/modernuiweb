import type { Meta, StoryObj } from "@storybook/react";

import { HeroSectionWithSearchBar } from "../search-bar";

const meta = {
  title: "sections/marketing-ui/hero-sections/Search Bar",
  component: HeroSectionWithSearchBar,
} satisfies Meta<typeof HeroSectionWithSearchBar>;

export default meta;

type Story = StoryObj<typeof HeroSectionWithSearchBar>;

export const Default: Story = {
  render: () => <HeroSectionWithSearchBar />,
};
