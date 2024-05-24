import type { Meta, StoryObj } from "@storybook/react";

import { FinancialExchangeCryptoHero } from "../crypto";

const meta = {
  title: "sections/marketing-ui/hero-sections/crypto",
  component: FinancialExchangeCryptoHero,
} satisfies Meta<typeof FinancialExchangeCryptoHero>;

export default meta;

type Story = StoryObj<typeof FinancialExchangeCryptoHero>;

export const Default: Story = {
  render: () => <FinancialExchangeCryptoHero />,
};
