import type { Meta, StoryObj } from "@storybook/react";

import { SignaturePad } from "~/components/ui/custom/signature-pad";

/**
 * A custom signature pad component.
 */
const meta: Meta<typeof SignaturePad> = {
  title: "custom/SignaturePad",
  component: SignaturePad,
  tags: ["autodocs"],
  args: {
    disabled: false,
    prefilledValue: null,
  },
};

export default meta;

type Story = StoryObj<typeof SignaturePad>;

/**
 * A signature pad component.
 */
export const Default: Story = {
  render: (args) => (
    <SignaturePad
      {...args}
      onChange={(value) => {
        console.log(value);
      }}
    />
  ),
};
