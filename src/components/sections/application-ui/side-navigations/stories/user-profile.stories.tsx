import type { Meta, StoryObj } from "@storybook/react";

import { UserProfileSideNavigation } from "~/components/sections/application-ui/side-navigations/user-profile";

const meta = {
  title: "sections/application-ui/side-navigations/user-profile",
  component: UserProfileSideNavigation,
} satisfies Meta<typeof UserProfileSideNavigation>;

export default meta;

type Story = StoryObj<typeof UserProfileSideNavigation>;

export const Default: Story = {
  render: () => <UserProfileSideNavigation />,
};
