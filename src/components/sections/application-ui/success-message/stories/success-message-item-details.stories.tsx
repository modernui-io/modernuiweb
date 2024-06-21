import type { Meta, StoryObj } from "@storybook/react";

import { SuccessMessageItemDetails } from "../success-message-item-details";

const meta = {
  title: "sections/application-ui/success-message/Success Message Item Details",
  component: SuccessMessageItemDetails,
} satisfies Meta<typeof SuccessMessageItemDetails>;

export default meta;

type Story = StoryObj<typeof SuccessMessageItemDetails>;

export const Default: Story = {
  render: () => <SuccessMessageItemDetails />,
};
