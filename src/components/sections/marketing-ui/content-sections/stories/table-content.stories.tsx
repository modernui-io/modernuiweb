import type { Meta, StoryObj } from "@storybook/react";

import { TableContentImage } from "../table-content-image";

const meta = {
  title: "sections/Marketing UI/Content/Table Content Image",
  component: TableContentImage,
} satisfies Meta<typeof TableContentImage>;

export default meta;

type Story = StoryObj<typeof TableContentImage>;

export const Default: Story = {
  render: () => <TableContentImage />,
};
