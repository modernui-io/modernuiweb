import type { Meta, StoryObj } from "@storybook/react";

import { ProductInformationAccordion } from "../accordian";

const meta = {
  title: "sections/E-commerce UI/Product Information/accordian",
  component: ProductInformationAccordion,
} satisfies Meta<typeof ProductInformationAccordion>;

export default meta;

type Story = StoryObj<typeof ProductInformationAccordion>;

export const Default: Story = {
  render: () => <ProductInformationAccordion />,
};
