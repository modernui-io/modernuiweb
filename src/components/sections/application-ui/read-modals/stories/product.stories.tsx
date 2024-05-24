import type { Meta, StoryObj } from "@storybook/react";

import { ReadProductModal } from "~/components/sections/application-ui/read-modals/product";

const meta = {
  title: "sections/application-ui/read-modals/product",
  component: ReadProductModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReadProductModal>;

export default meta;

type Story = StoryObj<typeof ReadProductModal>;

export const Default: Story = {
  render: () => <ReadProductModal />,
};
