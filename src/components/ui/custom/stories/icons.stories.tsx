import type { Meta, StoryObj } from "@storybook/react";
import { AlertTriangle, type LucideIcon } from "lucide-react";

import { Icons } from "~/components/ui/custom/icons";

/**
 * A custom icon component.
 */

const meta: Meta<typeof AlertTriangle> = {
  title: "custom/Icon",
  component: AlertTriangle,
  tags: ["autodocs"],
  args: {
    name: "icon",
  },
};

export default meta;

type Story = StoryObj<typeof AlertTriangle>;

/**
 * All Icons
 */
export const AllIcons: Story = {
  render: (args) => (
    <div className="grid gap-2">
      {Object.keys(Icons).map((icon, index) => {
        const IconToRender = Icons[icon as keyof typeof Icons] as LucideIcon;
        return <IconToRender {...args} key={index} />;
      })}
    </div>
  ),
};
