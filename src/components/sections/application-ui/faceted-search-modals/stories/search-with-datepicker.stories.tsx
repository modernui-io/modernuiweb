import type { Meta, StoryObj } from "@storybook/react";

import { SearchWithDatepicker } from "../search-with-datepicker";

const meta = {
  title: "sections/application-ui/search-modals/Search With Datepicker",
  component: SearchWithDatepicker,
} satisfies Meta<typeof SearchWithDatepicker>;

export default meta;

type Story = StoryObj<typeof SearchWithDatepicker>;

export const Default: Story = {
  render: () => <SearchWithDatepicker />,
};
