import type { Meta, StoryObj } from "@storybook/react";

import { FadeScroller } from "~/components/ui/custom/fade-scroller";

const meta: Meta<typeof FadeScroller> = {
  title: "customui/FadeScroller",
  component: FadeScroller,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FadeScroller>;

/**
 * The default form of the textarea.
 */
export const Default: Story = {
  render: (args) => (
    <FadeScroller {...args}>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
    </FadeScroller>
  ),
};
export const Vertical: Story = {
  render: ({ direction, ...restArgs }) => (
    // shrink-0 to prevent scrolling at larger sizes
    <FadeScroller
      direction="x"
      className="no-scrollbar flex gap-5 overflow-x-auto md:w-auto md:shrink-0"
      {...restArgs}
    >
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
      <div className="size-40 bg-red-500"></div>
    </FadeScroller>
  ),
};
