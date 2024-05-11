import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
} from "~/components/ui/custom/multi-select";

/**
 * A custom multi select component.
 */
const meta: Meta<typeof MultiSelect> = {
  title: "custom/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

/**
 * The default form of the multi select.
 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string | undefined>("");
    return (
      <MultiSelect
        onSearch={(v) => {
          setValue(v);
        }}
      >
        <MultiSelectTrigger className="w-96">
          <MultiSelectValue placeholder="Select stack" />
        </MultiSelectTrigger>
        <MultiSelectContent>
          <MultiSelectSearch placeholder="input any..." />
          <MultiSelectList>
            <MultiSelectGroup heading="React">
              <MultiSelectItem value="react">React</MultiSelectItem>
              <MultiSelectItem value="next">Next.js</MultiSelectItem>
              <MultiSelectItem value="remix">Remix</MultiSelectItem>
            </MultiSelectGroup>
            <MultiSelectGroup heading="Vue">
              <MultiSelectItem value="vue">Vue</MultiSelectItem>
              <MultiSelectItem value="nuxt">Nuxt</MultiSelectItem>
            </MultiSelectGroup>
            <MultiSelectGroup heading="Others">
              <MultiSelectItem value="angular">Angular</MultiSelectItem>
              <MultiSelectItem value="svelte">Svelte</MultiSelectItem>
            </MultiSelectGroup>
            <MultiSelectEmpty>{"No results found"}</MultiSelectEmpty>
          </MultiSelectList>
        </MultiSelectContent>
      </MultiSelect>
    );
  },
};
