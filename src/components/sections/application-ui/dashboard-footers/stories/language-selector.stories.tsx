import type { Meta, StoryObj } from "@storybook/react";

import { FooterWithLanguageSelectorAndOptions } from "~/components/sections/application-ui/dashboard-footers/language-selector";

const meta = {
  title: "sections/application-ui/dashboard-footers/language-selector",
  component: FooterWithLanguageSelectorAndOptions,
} satisfies Meta<typeof FooterWithLanguageSelectorAndOptions>;

export default meta;

type Story = StoryObj<typeof FooterWithLanguageSelectorAndOptions>;

export const Default: Story = {
  render: () => (
    <div className="absolute top-5 w-full px-20">
      <FooterWithLanguageSelectorAndOptions />
    </div>
  ),
};
