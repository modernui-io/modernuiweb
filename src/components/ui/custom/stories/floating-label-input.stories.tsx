import type { Meta, StoryObj } from "@storybook/react";

import { FloatingLabelInput } from "~/components/ui/custom/floating-label-input";

/**
 * A custom floating label input component.
 */
const meta: Meta<typeof FloatingLabelInput> = {
  title: "custom/FloatingLabelInput",
  component: FloatingLabelInput,
  tags: ["autodocs"],
  args: {
    value: "",
    label: "First Name",
    placeholder: "Placeholder",
    onChange: (value) => {
      console.log(value);
    },
  },
};

export default meta;

type Story = StoryObj<typeof FloatingLabelInput>;

/**
 * The default form of the floating label input.
 */
export const Default: Story = {
  render: (args) => <FloatingLabelInput {...args} />,
};
