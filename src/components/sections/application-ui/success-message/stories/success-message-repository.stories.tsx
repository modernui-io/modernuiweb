import type { Meta, StoryObj } from "@storybook/react";

import { SuccessMessageRepository } from "../success-message-repository";

const meta = {
  title: "sections/application-ui/success-message/Success Message Repository",
  component: SuccessMessageRepository,
} satisfies Meta<typeof SuccessMessageRepository>;

export default meta;

type Story = StoryObj<typeof SuccessMessageRepository>;

export const Default: Story = {
  render: () => <SuccessMessageRepository />,
};
