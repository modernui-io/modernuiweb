import type { Meta, StoryObj } from "@storybook/react";

import { HeaderWithCenteredLogo } from "../header-with-centered-logo";

const meta = {
  title: "sections/Marketing UI/Headers/Header With Centered Logo",
  component: HeaderWithCenteredLogo,
} satisfies Meta<typeof HeaderWithCenteredLogo>;

export default meta;

type Story = StoryObj<typeof HeaderWithCenteredLogo>;

export const Default: Story = {
  render: () => <HeaderWithCenteredLogo />,
};
