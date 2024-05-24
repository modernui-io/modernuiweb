import type { Meta, StoryObj } from "@storybook/react";

import { CreateProductModal } from "~/components/sections/application-ui/create-modals/product";

const meta = {
  title: "sections/application-ui/create-modals/product",
  component: CreateProductModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateProductModal>;

export default meta;

type Story = StoryObj<typeof CreateProductModal>;

export const Default: Story = {
  render: () => <CreateProductModal />,
};
