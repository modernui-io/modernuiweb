import type { Meta, StoryObj } from "@storybook/react";

import TimelineOrderTracking from "../timeline-order";

const meta = {
  title: "sections/E-commerce UI/Order Tracking/Order tracking with timeline",
  component: TimelineOrderTracking,
} satisfies Meta<typeof TimelineOrderTracking>;

export default meta;

type Story = StoryObj<typeof TimelineOrderTracking>;

export const Default: Story = {
  render: () => <TimelineOrderTracking />,
};
