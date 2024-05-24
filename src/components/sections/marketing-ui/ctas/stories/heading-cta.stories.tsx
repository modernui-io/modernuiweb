import type { Meta, StoryObj } from "@storybook/react";

import { HeadingWithCTAButtonSection } from "../heading-cta";

const meta = {
  title: "sections/Marketing UI/CTAS/Heading with CTA button",
  component: HeadingWithCTAButtonSection,
} satisfies Meta<typeof HeadingWithCTAButtonSection>;

export default meta;

type Story = StoryObj<typeof HeadingWithCTAButtonSection>;

export const Default: Story = {
  render: () => <HeadingWithCTAButtonSection />,
};
