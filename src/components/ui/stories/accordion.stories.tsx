import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

/**
 * A vertically stacked set of interactive headings that each reveal a section
 * of content.
 */
const meta: Meta<typeof Accordion> = {
  title: "ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&#39; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&#39;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

/**
 * The default behavior of the accordion allows only one item to be open.
 */
export const Single: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
};
