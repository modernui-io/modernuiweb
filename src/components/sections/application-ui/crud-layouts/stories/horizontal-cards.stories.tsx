import type { Meta, StoryObj } from "@storybook/react";

import { CRUDLayoutWithHorizontalCards } from "~/components/sections/application-ui/crud-layouts/horizontal-cards";

const meta = {
  title: "sections/application-ui/crud-layouts/horizontal-cards",
  component: CRUDLayoutWithHorizontalCards,
} satisfies Meta<typeof CRUDLayoutWithHorizontalCards>;

export default meta;

type Story = StoryObj<typeof CRUDLayoutWithHorizontalCards>;

export const Default: Story = {
  render: () => <CRUDLayoutWithHorizontalCards />,
};
