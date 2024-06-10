import type { Meta, StoryObj } from "@storybook/react";

import DefaultReview from "../default";

const meta = {
  title: "sections/E-Commerce UI/Product Reviews/Default Product Reviews",
  component: DefaultReview,
} satisfies Meta<typeof DefaultReview>;

export default meta;

type Story = StoryObj<typeof DefaultReview>;

export const Default: Story = {
  render: () => <DefaultReview />,
};
