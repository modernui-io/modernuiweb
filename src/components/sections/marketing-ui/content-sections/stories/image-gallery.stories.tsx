import type { Meta, StoryObj } from "@storybook/react";

import { ImageGallery } from "../image-gallery";

const meta = {
  title: "sections/Marketing UI/Content/Image Gallery",
  component: ImageGallery,
} satisfies Meta<typeof ImageGallery>;

export default meta;

type Story = StoryObj<typeof ImageGallery>;

export const Default: Story = {
  render: () => <ImageGallery />,
};
