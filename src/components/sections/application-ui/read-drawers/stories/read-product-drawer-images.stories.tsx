import type { Meta, StoryObj } from "@storybook/react";

import { ReadProductDrawerImages } from "../read-product-drawer-images";

const meta = {
  title: "sections/application-ui/read-drawers/Read Product Drawer With Images",
  component: ReadProductDrawerImages,
} satisfies Meta<typeof ReadProductDrawerImages>;

export default meta;

type Story = StoryObj<typeof ReadProductDrawerImages>;

export const Default: Story = {
  render: () => <ReadProductDrawerImages />,
};
