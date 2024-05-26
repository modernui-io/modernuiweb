import type { Meta, StoryObj } from "@storybook/react";
import { ChevronsUpDown, Info } from "lucide-react";

import { Button } from "../button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";

/**
 * An interactive component which expands/collapses a panel.
 */
const meta: Meta<typeof Collapsible> = {
  title: "ui/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    className: "w-96",
    disabled: false,
  },
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="flex gap-2">
        <h3 className="font-semibold">Can I use this in my project?</h3>
        <Info className="size-6" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

/**
 * The default form of the collapsible.
 */
export const Default: Story = {};

/**
 * Use the `disabled` prop to disable the interaction.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Use the `open` prop set to false.
 */
export const Closed: Story = {
  render: (args) => (
    <Collapsible
      open={false}
      onOpenChange={() => {}}
      className="w-[350px] space-y-2"
      {...args}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700">
          @radix-ui/colors
        </div>
        <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

/**
 * Use the `open` prop set to true.
 */
export const Opened: Story = {
  render: (args) => (
    <Collapsible
      open={true}
      onOpenChange={() => {}}
      className="w-[350px] space-y-2"
      {...args}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700">
          @radix-ui/colors
        </div>
        <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-700">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
