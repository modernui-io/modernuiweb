import type { Meta, StoryObj } from "@storybook/react";

import { IllustrationWithStatistics } from "../illustration-with-statistics";

const meta = {
  title: "sections/Marketing UI/Social Proofs/Illustration With Statistics ",
  component: IllustrationWithStatistics,
} satisfies Meta<typeof IllustrationWithStatistics>;

export default meta;

type Story = StoryObj<typeof IllustrationWithStatistics>;

export const Default: Story = {
  render: () => <IllustrationWithStatistics />,
};
