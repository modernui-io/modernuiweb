import type { Meta, StoryObj } from "@storybook/react";

import { DefaultCTASection } from "../default";

const meta = {
  title: "sections/Marketing UI/CTAS/Default CTA section",
  component: DefaultCTASection,
} satisfies Meta<typeof DefaultCTASection>;

export default meta;

type Story = StoryObj<typeof DefaultCTASection>;

export const Default: Story = {
  render: () => <DefaultCTASection />,
};
