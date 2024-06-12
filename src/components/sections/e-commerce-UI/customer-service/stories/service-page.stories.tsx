import type { Meta, StoryObj } from "@storybook/react";

import ServicePage from "../service-page";

const meta = {
  title: "sections/E-commerce UI/Customer Service/Customer service Page",
  component: ServicePage,
} satisfies Meta<typeof ServicePage>;

export default meta;

type Story = StoryObj<typeof ServicePage>;

export const Default: Story = {
  render: () => <ServicePage />,
};
