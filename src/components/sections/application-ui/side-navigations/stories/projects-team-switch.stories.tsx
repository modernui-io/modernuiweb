import type { Meta, StoryObj } from "@storybook/react";

import { ProjectsTeamSwitchSideNavigation } from "~/components/sections/application-ui/side-navigations/projects-team-switch";

const meta = {
  title: "sections/application-ui/side-navigations/projects-team-switch",
  component: ProjectsTeamSwitchSideNavigation,
} satisfies Meta<typeof ProjectsTeamSwitchSideNavigation>;

export default meta;

type Story = StoryObj<typeof ProjectsTeamSwitchSideNavigation>;

export const Default: Story = {
  render: () => <ProjectsTeamSwitchSideNavigation />,
};
