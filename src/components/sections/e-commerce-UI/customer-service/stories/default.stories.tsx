import type { Meta, StoryObj } from "@storybook/react";

import DefaultService from "../default";

const meta = {
  title: "sections/E-commerce UI/Customer Service/Default customer service",
  component: DefaultService,
} satisfies Meta<typeof DefaultService>;

export default meta;

type Story = StoryObj<typeof DefaultService>;

export const Default: Story = {
  render: () => <DefaultService />,
};
