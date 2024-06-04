import type { Meta, StoryObj } from "@storybook/react";

import { PreFooterCTA } from "../prefooter-cta";

const meta = {
  title: "sections/Marketing UI/Footers/PreFooter CTA",
  component: PreFooterCTA,
} satisfies Meta<typeof PreFooterCTA>;

export default meta;

type Story = StoryObj<typeof PreFooterCTA>;

export const Default: Story = {
  render: () => <PreFooterCTA />,
};
