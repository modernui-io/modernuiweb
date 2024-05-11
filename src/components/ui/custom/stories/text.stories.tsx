import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "~/components/ui/custom/text";

/**
 * A custom text component.
 */
const meta: Meta<typeof Text> = {
  title: "custom/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Text",
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

/**
 * All Variants of the text.
 */
export const AllVariants: Story = {
  render: (args) => (
    <>
      <Text {...args} level="lgTitle">
        Large Title
      </Text>
      <Text {...args} level="baseTitle">
        Base Title
      </Text>
      <Text {...args} level="mdTitle">
        Medium Title
      </Text>
      <Text {...args} level="smTitle">
        Small Title
      </Text>
      <Text {...args} level="xsTitle">
        XSmall Title
      </Text>
      <Text {...args} level="sub">
        Subtitle Text
      </Text>
      <Text {...args} level="xlTall">
        XL Tall Text
      </Text>
      <Text {...args} level="xl">
        XL Text
      </Text>
      <Text {...args} level="lgTall">
        Large Tall Text
      </Text>
      <Text {...args} level="lg">
        Large Text
      </Text>
      <Text {...args} level="baseTall">
        Base Tall Text
      </Text>
      <Text {...args} level="base">
        Base Text
      </Text>
      <Text {...args} level="mdTall">
        Medium Tall Text
      </Text>
      <Text {...args} level="md">
        Medium Text
      </Text>
      <Text {...args} level="smTall">
        Small Tall Text
      </Text>
      <Text {...args} level="sm">
        Small Text
      </Text>
      <Text {...args} level="caption">
        Caption Text
      </Text>
      <Text {...args} level="xs">
        XSmall Text
      </Text>
    </>
  ),
};
