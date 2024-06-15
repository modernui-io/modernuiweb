import type { Meta, StoryObj } from "@storybook/react";

import { DefaultSearchModal } from "../default-search-modal";

const meta = {
  title: "sections/application-ui/search-modals/Default Search Modal",
  component: DefaultSearchModal,
} satisfies Meta<typeof DefaultSearchModal>;

export default meta;

type Story = StoryObj<typeof DefaultSearchModal>;

export const Default: Story = {
  render: () => <DefaultSearchModal />,
};
