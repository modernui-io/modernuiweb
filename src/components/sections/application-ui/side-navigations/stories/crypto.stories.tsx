import type { Meta, StoryObj } from "@storybook/react";

import { CryptoSideNavigation } from "~/components/sections/application-ui/side-navigations/crypto";

const meta = {
  title: "sections/application-ui/side-navigations/crypto",
  component: CryptoSideNavigation,
} satisfies Meta<typeof CryptoSideNavigation>;

export default meta;

type Story = StoryObj<typeof CryptoSideNavigation>;

export const Default: Story = {
  render: () => <CryptoSideNavigation />,
};
