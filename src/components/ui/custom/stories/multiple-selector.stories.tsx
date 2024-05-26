import type { Meta, StoryObj } from "@storybook/react";

import {
  MultipleSelector,
  type Option,
} from "~/components/ui/custom/multiple-selector";

const OPTIONS: Option[] = [
  { label: "nextjs", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "Ember", value: "ember", disable: true },
  { label: "Gatsby", value: "gatsby", disable: true },
  { label: "Astro", value: "astro" },
];

/**
 * A custom multiple selector component.
 */
const meta: Meta<typeof MultipleSelector> = {
  title: "custom/MultipleSelector",
  component: MultipleSelector,
  tags: ["autodocs"],
  args: {
    options: OPTIONS,
  },
};

export default meta;

type Story = StoryObj<typeof MultipleSelector>;

/**
 * A multiple selector component.
 */
export const Default: Story = {
  render: (args) => (
    <MultipleSelector
      {...args}
      placeholder="Select frameworks you like..."
      emptyIndicator={
        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
          no results found.
        </p>
      }
      onChange={(value) => {
        console.log(value);
      }}
    />
  ),
};
