import type { Meta, StoryObj } from "@storybook/react";

import { SlideIn } from "~/components/ui/layout/slide-in";

const meta: Meta<typeof SlideIn> = {
  title: "layout/SlideIn",
  component: SlideIn,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SlideIn>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-[32rem] pb-24">
      {["Item 1", "Item 2", "Item 3"].map((item) => (
        <SlideIn key={item}>{item}</SlideIn>
      ))}
    </div>
  ),
};
