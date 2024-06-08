import type { Meta, StoryObj } from "@storybook/react";

import { ImageHeadingDescription } from "../image-heading-description";

const meta = {
  title: "sections/Marketing UI/Content/Image Heading Description",
  component: ImageHeadingDescription,
} satisfies Meta<typeof ImageHeadingDescription>;

export default meta;

type Story = StoryObj<typeof ImageHeadingDescription>;

export const Default: Story = {
  render: () => <ImageHeadingDescription />,
};
