import type { Meta, StoryObj } from "@storybook/react";

import { FinancialTradingCTASection } from "../finance-trading";

const meta = {
  title: "sections/Marketing UI/CTAS/Financial Trading CTA",
  component: FinancialTradingCTASection,
} satisfies Meta<typeof FinancialTradingCTASection>;

export default meta;

type Story = StoryObj<typeof FinancialTradingCTASection>;

export const Default: Story = {
  render: () => <FinancialTradingCTASection />,
};
