import type { Meta, StoryObj } from "@storybook/react";

import { VideoContent } from "../video-content";

const meta = {
  title: "sections/Marketing UI/Content/Video embed content",
  component: VideoContent,
} satisfies Meta<typeof VideoContent>;

export default meta;

type Story = StoryObj<typeof VideoContent>;

export const Default: Story = {
  render: () => <VideoContent />,
  parameters: {
    controls: { expanded: true },
  },
};
