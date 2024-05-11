import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tag, TagInput } from "~/components/ui/custom/tag-input";

/**
 * A custom tag input component.
 */
const meta: Meta<typeof TagInput> = {
  title: "custom/TagInput",
  component: TagInput,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof TagInput>;

/**
 * All Variants of the tag input.
 */
export const AllVariants: Story = {
  render: (args) => {
    const [tags, setTags] = React.useState<Tag[]>([]);

    return (
      <TagInput
        {...args}
        placeholder="Enter a topic"
        tags={tags}
        setTags={(newTags) => {
          setTags(newTags);
          // setValue('topics', newTags as [Tag, ...Tag[]]);
        }}
      />
    );
  },
};
