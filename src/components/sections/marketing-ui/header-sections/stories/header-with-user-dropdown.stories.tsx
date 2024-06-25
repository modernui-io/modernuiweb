import type { Meta, StoryObj } from "@storybook/react";

import { UserDropDownMenuHeader } from "../header-with-user-dropdown";

const meta = {
  title: "sections/Marketing UI/Headers/Header with user dropdown",
  component: UserDropDownMenuHeader,
} satisfies Meta<typeof UserDropDownMenuHeader>;

export default meta;

type Story = StoryObj<typeof UserDropDownMenuHeader>;

export const Default: Story = {
  render: () => <UserDropDownMenuHeader />,
};
