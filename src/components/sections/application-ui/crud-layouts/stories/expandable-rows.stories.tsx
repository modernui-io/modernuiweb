import type { Meta, StoryObj } from "@storybook/react";

import { CRUDLayoutWithExpandableRows } from "~/components/sections/application-ui/crud-layouts/expandable-rows";

const meta = {
  title: "sections/application-ui/crud-layouts/expandable-rows",
  component: CRUDLayoutWithExpandableRows,
} satisfies Meta<typeof CRUDLayoutWithExpandableRows>;

export default meta;

type Story = StoryObj<typeof CRUDLayoutWithExpandableRows>;

export const Default: Story = {
  render: () => <CRUDLayoutWithExpandableRows />,
};
