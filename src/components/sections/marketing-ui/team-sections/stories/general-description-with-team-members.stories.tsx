import type { Meta, StoryObj } from "@storybook/react";

import { GeneralDescriptionWithTeamMembers } from "../general-description-with-team-members";

const meta = {
  title: "sections/Marketing UI/Team/General Description With Team Members",
  component: GeneralDescriptionWithTeamMembers,
} satisfies Meta<typeof GeneralDescriptionWithTeamMembers>;

export default meta;

type Story = StoryObj<typeof GeneralDescriptionWithTeamMembers>;

export const Default: Story = {
  render: () => <GeneralDescriptionWithTeamMembers />,
};
