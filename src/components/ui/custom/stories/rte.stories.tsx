import type { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "~/components/ui/custom/rte";

/**
 * A custom rich text editor component.
 */
const meta: Meta<typeof RichTextEditor> = {
  title: "custom/RichTextEditor",
  component: RichTextEditor,
  tags: ["autodocs"],
  args: {
    classNames: {},
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof RichTextEditor>;

/**
 * All Variants of the rich text editor.
 */
export const AllVariants: Story = {
  render: (args) => <RichTextEditor {...args} />,
};
