import type { Meta, StoryObj } from "@storybook/react";

import { AdvancedReadUserSection } from "~/components/sections/application-ui/read-sections/advanced-user";

const meta = {
  title: "sections/application-ui/read-sections/advanced-user",
  component: AdvancedReadUserSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AdvancedReadUserSection>;

export default meta;

type Story = StoryObj<typeof AdvancedReadUserSection>;

export const Default: Story = {
  render: () => <AdvancedReadUserSection />,
};
