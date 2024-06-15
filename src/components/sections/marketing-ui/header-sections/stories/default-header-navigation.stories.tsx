import type { Meta, StoryObj } from "@storybook/react";

import { DefaultHeaderNavigation } from "../default-header-navigation";

const meta = {
  title: "sections/Marketing UI/Headers/Default Header Navigation",
  component: DefaultHeaderNavigation,
} satisfies Meta<typeof DefaultHeaderNavigation>;

export default meta;

type Story = StoryObj<typeof DefaultHeaderNavigation>;

export const Default: Story = {
  render: () => <DefaultHeaderNavigation />,
};
