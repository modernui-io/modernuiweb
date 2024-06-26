import type { Meta, StoryObj } from "@storybook/react";

import { UpdateProductModal } from "~/components/sections/application-ui/update-modals/product";

const meta = {
  title: "sections/application-ui/update-modals/product",
  component: UpdateProductModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateProductModal>;

export default meta;

type Story = StoryObj<typeof UpdateProductModal>;

export const Default: Story = {
  render: () => <UpdateProductModal />,
};
