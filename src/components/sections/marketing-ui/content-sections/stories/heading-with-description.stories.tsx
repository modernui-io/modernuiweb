import type { Meta, StoryObj } from "@storybook/react";

import { HeadingDescription } from "../heading-description";

const meta = {
  title: "sections/Marketing UI/Content/Heading Description",
  component: HeadingDescription,
} satisfies Meta<typeof HeadingDescription>;

export default meta;

type Story = StoryObj<typeof HeadingDescription>;

export const Default: Story = {
  render: () => <HeadingDescription />,
};
