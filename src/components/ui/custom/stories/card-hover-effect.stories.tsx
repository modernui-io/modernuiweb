import type { Meta, StoryObj } from "@storybook/react";

import { HoverEffect } from "~/components/ui/custom/card-hover-effect";

/**
 * A custom card hover effect component.
 */
const meta: Meta<typeof HoverEffect> = {
  title: "custom/CardHoverEffect",
  component: HoverEffect,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof HoverEffect>;

/**
 * The default form of the card hover effect.
 */
export const Default: Story = {
  render: (args) => (
    <HoverEffect
      items={[
        {
          title: "Title 1",
          description: "Description 1",
          link: "https://example.com",
        },
        {
          title: "Title 2",
          description: "Description 2",
          link: "https://example.com",
        },
        {
          title: "Title 3",
          description: "Description 3",
          link: "https://example.com",
        },
      ]}
    />
  ),
};
