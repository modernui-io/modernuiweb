import type { Meta, StoryObj } from "@storybook/react";

import { DefaultSideNavigation } from "~/components/sections/application-ui/side-navigations/default";

const meta = {
  title: "sections/application-ui/side-navigations/default",
  component: DefaultSideNavigation,
} satisfies Meta<typeof DefaultSideNavigation>;

export default meta;

type Story = StoryObj<typeof DefaultSideNavigation>;

export const Default: Story = {
  render: () => <DefaultSideNavigation />,
};
