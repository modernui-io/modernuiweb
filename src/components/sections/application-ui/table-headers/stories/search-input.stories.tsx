import type { Meta, StoryObj } from "@storybook/react";

import { TableHeaderWithSearchInput } from "~/components/sections/application-ui/table-headers/search-input";

const meta = {
  title: "sections/application-ui/table-headers/search-input",
  component: TableHeaderWithSearchInput,
} satisfies Meta<typeof TableHeaderWithSearchInput>;

export default meta;

type Story = StoryObj<typeof TableHeaderWithSearchInput>;

export const Default: Story = {
  render: () => <TableHeaderWithSearchInput />,
};
