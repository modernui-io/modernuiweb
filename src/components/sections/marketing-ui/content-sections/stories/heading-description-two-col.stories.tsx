import type { Meta, StoryObj } from "@storybook/react";

import { HeadingDescriptionTwoColumn } from "../heading-description-two-col";

const meta = {
  title: "sections/Marketing UI/Content/Heading with description (two columns)",
  component: HeadingDescriptionTwoColumn,
} satisfies Meta<typeof HeadingDescriptionTwoColumn>;

export default meta;

type Story = StoryObj<typeof HeadingDescriptionTwoColumn>;

export const Default: Story = {
  render: () => <HeadingDescriptionTwoColumn />,
};
