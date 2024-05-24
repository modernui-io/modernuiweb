import type { Meta, StoryObj } from "@storybook/react";

import { ImageWithCTAButtonSection } from "../image-cta-button";

const meta = {
  title: "sections/Marketing UI/CTAS/Image with CTA button",
  component: ImageWithCTAButtonSection,
} satisfies Meta<typeof ImageWithCTAButtonSection>;

export default meta;

type Story = StoryObj<typeof ImageWithCTAButtonSection>;

export const Default: Story = {
  render: () => <ImageWithCTAButtonSection />,
};
