import type { Meta, StoryObj } from "@storybook/react";

import { DefaultFooterSection } from "../default-footer-section";

const meta = {
  title: "sections/Marketing UI/Footers/Default Footer Section",
  component: DefaultFooterSection,
} satisfies Meta<typeof DefaultFooterSection>;

export default meta;

type Story = StoryObj<typeof DefaultFooterSection>;

export const Default: Story = {
  render: () => <DefaultFooterSection />,
};
