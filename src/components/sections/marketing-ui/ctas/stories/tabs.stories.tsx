import type { Meta, StoryObj } from "@storybook/react";

import { CTASectionWithTabsAndMobileApp } from "../tabs";

const meta = {
  title: "sections/Marketing UI/CTAS/CTA Section With Tabs And Mobile App",
  component: CTASectionWithTabsAndMobileApp,
} satisfies Meta<typeof CTASectionWithTabsAndMobileApp>;

export default meta;

type Story = StoryObj<typeof CTASectionWithTabsAndMobileApp>;

export const Default: Story = {
  render: () => <CTASectionWithTabsAndMobileApp />,
};
