import type { Meta, StoryObj } from "@storybook/react";

import { ContactsSideNavigation } from "~/components/sections/application-ui/side-navigations/contacts";

const meta = {
  title: "sections/application-ui/side-navigations/contacts",
  component: ContactsSideNavigation,
} satisfies Meta<typeof ContactsSideNavigation>;

export default meta;

type Story = StoryObj<typeof ContactsSideNavigation>;

export const Default: Story = {
  render: () => <ContactsSideNavigation />,
};
