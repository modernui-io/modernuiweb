import type { Meta, StoryObj } from "@storybook/react";

import { HeaderWithSearchbar } from "../header-with-searchbar";

const meta = {
  title: "sections/Marketing UI/Headers/Header With Searchbar",
  component: HeaderWithSearchbar,
} satisfies Meta<typeof HeaderWithSearchbar>;

export default meta;

type Story = StoryObj<typeof HeaderWithSearchbar>;

export const Default: Story = {
  render: () => <HeaderWithSearchbar />,
};
