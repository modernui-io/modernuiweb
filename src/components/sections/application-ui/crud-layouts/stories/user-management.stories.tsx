import type { Meta, StoryObj } from "@storybook/react";

import { CRUDLayoutForUserManagement } from "~/components/sections/application-ui/crud-layouts/user-management";

const meta = {
  title: "sections/application-ui/crud-layouts/user-management",
  component: CRUDLayoutForUserManagement,
} satisfies Meta<typeof CRUDLayoutForUserManagement>;

export default meta;

type Story = StoryObj<typeof CRUDLayoutForUserManagement>;

export const Default: Story = {
  render: () => <CRUDLayoutForUserManagement />,
};
