import type { Meta, StoryObj } from "@storybook/react";

import { DefaultSuccessMessage } from "../default-success-message";

const meta = {
  title: "sections/application-ui/success-message/Default Success Message",
  component: DefaultSuccessMessage,
} satisfies Meta<typeof DefaultSuccessMessage>;

export default meta;

type Story = StoryObj<typeof DefaultSuccessMessage>;

export const Default: Story = {
  render: () => <DefaultSuccessMessage />,
};
