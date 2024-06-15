import type { Meta, StoryObj } from "@storybook/react";

import { DropDownMenuHeader } from "../header-with-dropdown-menu";

const meta = {
  title: "sections/Marketing UI/Headers/Header with dropdown menu",
  component: DropDownMenuHeader,
} satisfies Meta<typeof DropDownMenuHeader>;

export default meta;

type Story = StoryObj<typeof DropDownMenuHeader>;

export const Default: Story = {
  render: () => <DropDownMenuHeader />,
};
