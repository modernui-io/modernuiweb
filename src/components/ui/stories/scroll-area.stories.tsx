import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "../scroll-area";
import { Separator } from "../separator";

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <ScrollArea
      className="h-72 w-48 rounded-md border border-slate-100 dark:border-slate-700"
      {...args}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 })
          .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
          .map((tag, index) => (
            <React.Fragment key={index}>
              <div className="text-sm" key={tag}>
                {tag}
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
      </div>
    </ScrollArea>
  ),
};
