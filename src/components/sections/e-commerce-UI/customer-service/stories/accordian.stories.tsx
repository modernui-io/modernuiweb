import type { Meta, StoryObj } from "@storybook/react";

import AccordianFaqService from "../accordian-faq";

const meta = {
  title:
    "sections/Ecommerce-UI/Customer Service/Customer service accordion with FAQ",
  component: AccordianFaqService,
} satisfies Meta<typeof AccordianFaqService>;

export default meta;

type Story = StoryObj<typeof AccordianFaqService>;

export const Default: Story = {
  render: () => <AccordianFaqService />,
};
