import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithCTAAndButtonGroup } from "~/components/sections/table-headers/cta-button-group";

const meta = {
  title: "sections/table-headers/cta-button-group",
  component: TableHeaderWithCTAAndButtonGroup,
} satisfies Meta<typeof TableHeaderWithCTAAndButtonGroup>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithCTAAndButtonGroup>;

export const Default: Story = {
  render: () => <TableHeaderWithCTAAndButtonGroup />,
};
