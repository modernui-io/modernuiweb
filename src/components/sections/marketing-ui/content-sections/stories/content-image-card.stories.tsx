import type { Meta, StoryObj } from "@storybook/react";

import { ContentImageCard } from "../content-image-card";

const meta = {
  title: "sections/Marketing UI/Content/Content Card Images",
  component: ContentImageCard,
} satisfies Meta<typeof ContentImageCard>;

export default meta;

type Story = StoryObj<typeof ContentImageCard>;

export const Default: Story = {
  render: () => <ContentImageCard />,
};
