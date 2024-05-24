import type { Meta, StoryObj } from "@storybook/react";

import { DefaultHero } from "../default";

const meta = {
  title: "sections/marketing-ui/hero-sections/Default Hero",
  component: DefaultHero,
} satisfies Meta<typeof DefaultHero>;

export default meta;

type Story = StoryObj<typeof DefaultHero>;

export const Default: Story = {
  render: () => <DefaultHero />,
};
