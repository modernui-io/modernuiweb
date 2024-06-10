import type { Meta, StoryObj } from "@storybook/react";

import ModalOrderTracking from "../modal-tracking-order";

const meta = {
  title: "sections/E-commerce UI/Order Tracking/Order tracking with modal",
  component: ModalOrderTracking,
} satisfies Meta<typeof ModalOrderTracking>;

export default meta;

type Story = StoryObj<typeof ModalOrderTracking>;

export const Default: Story = {
  render: () => <ModalOrderTracking />,
};
