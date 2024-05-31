import type { Meta, StoryObj } from "@storybook/react";

import { TeamMemberCards } from "../team-member-cards";

const meta = {
  title: "sections/Marketing UI/Team/Team Member Cards",
  component: TeamMemberCards,
} satisfies Meta<typeof TeamMemberCards>;

export default meta;

type Story = StoryObj<typeof TeamMemberCards>;

export const Default: Story = {
  render: () => <TeamMemberCards />,
};
