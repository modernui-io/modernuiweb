import type { Meta, StoryObj } from "@storybook/react";

import { CardCTAsWithIconsSection } from "../cards-icons";

const meta = {
  title: "sections/Marketing UI/CTAS/Card CTAs with icons",
  component: CardCTAsWithIconsSection,
} satisfies Meta<typeof CardCTAsWithIconsSection>;

export default meta;

type Story = StoryObj<typeof CardCTAsWithIconsSection>;

export const Default: Story = {
  render: () => <CardCTAsWithIconsSection />,
};
