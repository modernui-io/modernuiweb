import type { Meta, StoryObj } from "@storybook/react";

import { ReadProductSectionWithCarousel } from "~/components/sections/application-ui/read-sections/product-carousel";

const meta = {
  title: "sections/application-ui/read-sections/product-carousel",
  component: ReadProductSectionWithCarousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReadProductSectionWithCarousel>;

export default meta;

type Story = StoryObj<typeof ReadProductSectionWithCarousel>;

export const Default: Story = {
  render: () => <ReadProductSectionWithCarousel />,
};
