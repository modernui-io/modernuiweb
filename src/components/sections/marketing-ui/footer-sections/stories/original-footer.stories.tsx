import type { Meta, StoryObj } from "@storybook/react";

import { OriginalFooter } from "../original-footer";

const meta = {
  title: "sections/Marketing UI/Footers/Original Footer",
  component: OriginalFooter,
} satisfies Meta<typeof OriginalFooter>;

export default meta;

type Story = StoryObj<typeof OriginalFooter>;

export const Default: Story = {
  render: () => <OriginalFooter />,
};
