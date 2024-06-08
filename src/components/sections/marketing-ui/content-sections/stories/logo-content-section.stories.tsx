import type { Meta, StoryObj } from "@storybook/react";

import { LogoContentSection } from "../logo-content-section";

const meta = {
  title: "sections/Marketing UI/Content/Content Section with Logo",
  component: LogoContentSection,
} satisfies Meta<typeof LogoContentSection>;

export default meta;

type Story = StoryObj<typeof LogoContentSection>;

export const Default: Story = {
  render: () => <LogoContentSection />,
};
