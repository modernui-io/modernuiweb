import type { Meta, StoryObj } from "@storybook/react";

import { AutosizeTextarea } from "~/components/ui/custom/autosize-textarea";

/**
 * An autosize textarea component.
 */
const meta: Meta<typeof AutosizeTextarea> = {
  title: "custom/AutosizeTextarea",
  component: AutosizeTextarea,
  tags: ["autodocs"],
  args: {
    value: "Textarea",
  },
};

export default meta;

type Story = StoryObj<typeof AutosizeTextarea>;

/**
 * The default form of the autosize textarea.
 */
export const Default: Story = {
  render: (args) => <AutosizeTextarea {...args} />,
};
