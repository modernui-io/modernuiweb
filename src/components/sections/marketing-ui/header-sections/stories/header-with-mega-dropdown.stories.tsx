import type { Meta, StoryObj } from "@storybook/react";

import { MegaDropdownHeader } from "../header-with-mega-dropdown";

const meta = {
  title: "sections/Marketing UI/Headers/Header with Mega Dropdown",
  component: MegaDropdownHeader,
} satisfies Meta<typeof MegaDropdownHeader>;

export default meta;

type Story = StoryObj<typeof MegaDropdownHeader>;

export const Default: Story = {
  render: () => <MegaDropdownHeader />,
};
