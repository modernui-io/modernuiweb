import type { Meta, StoryObj } from "@storybook/react";

import { DoubleSideNavigation } from "~/components/sections/application-ui/side-navigations/double";

const meta = {
  title: "sections/application-ui/side-navigations/double",
  component: DoubleSideNavigation,
} satisfies Meta<typeof DoubleSideNavigation>;

export default meta;

type Story = StoryObj<typeof DoubleSideNavigation>;

export const Default: Story = {
  render: () => <DoubleSideNavigation />,
};
