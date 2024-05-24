import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedProjectManagementTableForUserTasks } from "~/components/sections/application-ui/advanced-tables/project-management";

const meta = {
  title: "sections/application-ui/advanced-tables/project-management",
  component: AdvancedProjectManagementTableForUserTasks,
} satisfies Meta<typeof AdvancedProjectManagementTableForUserTasks>;

export default meta;

type Story = StoryObj<typeof AdvancedProjectManagementTableForUserTasks>;

export const Default: Story = {
  render: () => <AdvancedProjectManagementTableForUserTasks />,
};
