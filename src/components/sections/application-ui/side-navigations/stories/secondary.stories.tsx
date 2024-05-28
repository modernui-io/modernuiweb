import type { Meta, StoryObj } from "@storybook/react";

import { SecondarySideNavigation } from "~/components/sections/application-ui/side-navigations/secondary";

const meta = {
  title: "sections/application-ui/side-navigations/secondary",
  component: SecondarySideNavigation,
} satisfies Meta<typeof SecondarySideNavigation>;

export default meta;

type Story = StoryObj<typeof SecondarySideNavigation>;

export const Default: Story = {
  render: () => <SecondarySideNavigation />,
};
