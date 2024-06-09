import type { Meta, StoryObj } from "@storybook/react";

import DrawerService from "../drawer";

const meta = {
  title: "sections/Ecommerce-UI/Customer Service/Customer service with drawer",
  component: DrawerService,
} satisfies Meta<typeof DrawerService>;

export default meta;

type Story = StoryObj<typeof DrawerService>;

export const Default: Story = {
  render: () => <DrawerService />,
};
