import type { Meta, StoryObj } from "@storybook/react";

import { HeadingWithStatistics } from "../heading-with-statistics";

const meta = {
  title: "sections/Marketing UI/Social Proofs/Heading With Statistics ",
  component: HeadingWithStatistics,
} satisfies Meta<typeof HeadingWithStatistics>;

export default meta;

type Story = StoryObj<typeof HeadingWithStatistics>;

export const Default: Story = {
  render: () => <HeadingWithStatistics />,
};
