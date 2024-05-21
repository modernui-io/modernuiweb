import type { Meta, StoryObj } from "@storybook/react";

import { MobileAppDownloadCTASection } from "../mobile-app";

const meta = {
  title: "sections/Marketing UI/CTAS/Mobile App Download",
  component: MobileAppDownloadCTASection,
} satisfies Meta<typeof MobileAppDownloadCTASection>;

export default meta;

type Story = StoryObj<typeof MobileAppDownloadCTASection>;

export const Default: Story = {
  render: () => <MobileAppDownloadCTASection />,
};
