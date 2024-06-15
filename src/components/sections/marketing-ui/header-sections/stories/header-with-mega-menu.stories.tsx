import type { Meta, StoryObj } from "@storybook/react";

import { HeaderWithMegaMenu } from "../header-with-mega-menu";

const meta = {
  title: "sections/Marketing UI/Headers/Header with mega menu",
  component: HeaderWithMegaMenu,
} satisfies Meta<typeof HeaderWithMegaMenu>;

export default meta;

type Story = StoryObj<typeof HeaderWithMegaMenu>;

export const Default: Story = {
  render: () => <HeaderWithMegaMenu />,
};
