import type { Meta, StoryObj } from "@storybook/react";

import { OverlayCardsWithZoomEffect } from "../overlay-cards-with-zoom-effect";

const meta = {
  title: "sections/Marketing UI/Team/Overlay Cards With Zoom Effect",
  component: OverlayCardsWithZoomEffect,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof OverlayCardsWithZoomEffect>;

export default meta;

type Story = StoryObj<typeof OverlayCardsWithZoomEffect>;

export const Default: Story = {
  render: () => <OverlayCardsWithZoomEffect />,
};
