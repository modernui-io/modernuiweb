import Image from "next/image";

import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "~/components/ui/aspect-ratio";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <AspectRatio
      ratio={16 / 9}
      className="bg-slate-50 dark:bg-slate-800"
      {...args}
    >
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  ),
};
