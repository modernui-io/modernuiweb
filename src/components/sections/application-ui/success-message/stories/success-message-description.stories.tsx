import type { Meta, StoryObj } from "@storybook/react";

import { SuccessMessageDescription } from "../success-message-description";

const meta = {
  title: "sections/application-ui/success-message/Success Message Description",
  component: SuccessMessageDescription,
} satisfies Meta<typeof SuccessMessageDescription>;

export default meta;

type Story = StoryObj<typeof SuccessMessageDescription>;

export const Default: Story = {
  render: () => <SuccessMessageDescription />,
};
