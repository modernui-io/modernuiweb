import type { Meta, StoryObj } from "@storybook/react";

import { TasksDoubleSideNavigation } from "~/components/sections/application-ui/side-navigations/tasks-double";

const meta = {
  title: "sections/application-ui/side-navigations/tasks-double",
  component: TasksDoubleSideNavigation,
} satisfies Meta<typeof TasksDoubleSideNavigation>;

export default meta;

type Story = StoryObj<typeof TasksDoubleSideNavigation>;

export const Default: Story = {
  render: () => <TasksDoubleSideNavigation />,
};
