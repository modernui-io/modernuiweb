import type { Meta, StoryObj } from "@storybook/react";

import { HeaderWithSubNavbar } from "../header-with-sub-navbar";

const meta = {
  title: "sections/Marketing UI/Headers/Header With Sub Navbar",
  component: HeaderWithSubNavbar,
} satisfies Meta<typeof HeaderWithSubNavbar>;

export default meta;

type Story = StoryObj<typeof HeaderWithSubNavbar>;

export const Default: Story = {
  render: () => <HeaderWithSubNavbar />,
};
