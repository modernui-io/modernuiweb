import type { Meta, StoryObj } from "@storybook/react";

import { QRCodeCTASection } from "../qr-code";

const meta = {
  title: "sections/Marketing UI/CTAS/QR code CTA",
  component: QRCodeCTASection,
} satisfies Meta<typeof QRCodeCTASection>;

export default meta;

type Story = StoryObj<typeof QRCodeCTASection>;

export const Default: Story = {
  render: () => <QRCodeCTASection />,
};
