import type { Meta, StoryObj } from "@storybook/react";

import LiveBlogging from "../live-blogging";

const meta = {
  title: "sections/Publisher UI/Live Blogging",
  component: LiveBlogging,
} satisfies Meta<typeof LiveBlogging>;

export default meta;

type Story = StoryObj<typeof LiveBlogging>;

export const Default: Story = {
  render: () => <LiveBlogging />,
};
