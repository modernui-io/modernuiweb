import type { Meta, StoryObj } from "@storybook/react";

import { SuccessMessageList } from "../success-message-list";

const meta = {
  title: "sections/application-ui/success-message/Success Message With List",
  component: SuccessMessageList,
} satisfies Meta<typeof SuccessMessageList>;

export default meta;

type Story = StoryObj<typeof SuccessMessageList>;

export const Default: Story = {
  render: () => <SuccessMessageList />,
};
