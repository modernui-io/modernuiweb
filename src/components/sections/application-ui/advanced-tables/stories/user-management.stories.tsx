import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedUserManagementTable } from "~/components/sections/application-ui/advanced-tables/user-management";

const meta = {
  title: "sections/application-ui/advanced-tables/user-management",
  component: AdvancedUserManagementTable,
} satisfies Meta<typeof AdvancedUserManagementTable>;

export default meta;

type Story = StoryObj<typeof AdvancedUserManagementTable>;

export const Default: Story = {
  render: () => <AdvancedUserManagementTable />,
};
