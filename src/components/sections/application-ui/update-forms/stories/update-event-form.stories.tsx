import type { Meta, StoryObj } from "@storybook/react";

import { UpdateEventForm } from "../update-event-form";

const meta = {
  title: "sections/application-ui/update-forms/Update Event Form",
  component: UpdateEventForm,
} satisfies Meta<typeof UpdateEventForm>;

export default meta;

type Story = StoryObj<typeof UpdateEventForm>;

export const Default: Story = {
  render: () => <UpdateEventForm />,
};
