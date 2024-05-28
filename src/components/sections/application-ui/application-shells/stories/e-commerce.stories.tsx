import type { Meta, StoryObj } from "@storybook/react";

import { ECommerceApplicationShell } from "~/components/sections/application-ui/application-shells/e-commerce";

const meta = {
  title: "sections/application-ui/application-shells/e-commerce",
  component: ECommerceApplicationShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ECommerceApplicationShell>;

export default meta;

type Story = StoryObj<typeof ECommerceApplicationShell>;

export const Default: Story = {
  render: () => <ECommerceApplicationShell />,
};
