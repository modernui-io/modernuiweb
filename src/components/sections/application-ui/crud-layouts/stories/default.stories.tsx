import type { Meta, StoryObj } from "@storybook/react";

import { DefaultCRUDLayout } from "~/components/sections/application-ui/crud-layouts/default";

const meta = {
  title: "sections/application-ui/crud-layouts/default",
  component: DefaultCRUDLayout,
} satisfies Meta<typeof DefaultCRUDLayout>;

export default meta;

type Story = StoryObj<typeof DefaultCRUDLayout>;

export const Default: Story = {
  render: () => <DefaultCRUDLayout />,
};
