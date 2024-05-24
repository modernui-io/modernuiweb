import type { Meta, StoryObj } from "@storybook/react";

import { SearchBarDatepickerHeroSection } from "../datepicker";

const meta = {
  title: "sections/marketing-ui/hero-sections/datepicker",
  component: SearchBarDatepickerHeroSection,
} satisfies Meta<typeof SearchBarDatepickerHeroSection>;

export default meta;

type Story = StoryObj<typeof SearchBarDatepickerHeroSection>;

export const Default: Story = {
  render: () => <SearchBarDatepickerHeroSection />,
};
