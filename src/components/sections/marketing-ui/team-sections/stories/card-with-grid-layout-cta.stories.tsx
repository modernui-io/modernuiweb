import type { Meta, StoryObj } from "@storybook/react";

import { CardWithGridLayoutCTA } from "../card-with-grid-layout-cta";

const meta = {
  title: "sections/Marketing UI/Team/Card With Grid Layout and CTA",
  component: CardWithGridLayoutCTA,
} satisfies Meta<typeof CardWithGridLayoutCTA>;

export default meta;

type Story = StoryObj<typeof CardWithGridLayoutCTA>;

export const Default: Story = {
  render: () => <CardWithGridLayoutCTA />,
};
