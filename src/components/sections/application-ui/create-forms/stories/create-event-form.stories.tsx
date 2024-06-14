import type { Meta, StoryObj } from "@storybook/react";

import { CreateEventForm } from "../create-event-form";

const meta = {
  title: "sections/application-ui/create-forms/Create Event Form",
  component: CreateEventForm,
} satisfies Meta<typeof CreateEventForm>;

export default meta;

type Story = StoryObj<typeof CreateEventForm>;

export const Default: Story = {
  render: () => <CreateEventForm />,
};
