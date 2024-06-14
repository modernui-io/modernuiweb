import type { Meta, StoryObj } from "@storybook/react";

import WysiwygService from "../service-wysiwyg";

const meta = {
  title:
    "sections/E-commerce UI/Customer Service/Customer service with wysiwyg",
  component: WysiwygService,
} satisfies Meta<typeof WysiwygService>;

export default meta;

type Story = StoryObj<typeof WysiwygService>;

export const Default: Story = {
  render: () => <WysiwygService />,
};
