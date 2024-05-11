import type { Meta, StoryObj } from "@storybook/react";

import { DialogOrDrawer } from "~/components/ui/custom/dialog-or-drawer";

/**
 * A custom dialog or drawer component.
 */
const meta: Meta<typeof DialogOrDrawer> = {
  title: "custom/DialogOrDrawer",
  component: DialogOrDrawer,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof DialogOrDrawer>;

/**
 * The default form of the dialog or drawer.
 */
export const Default: Story = {
  render: (args) => (
    <DialogOrDrawer {...args} title="Dialog" description="This is a dialog." />
  ),
};
