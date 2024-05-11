import type { Meta, StoryObj } from "@storybook/react";

import { ImageCheckbox } from "~/components/ui/custom/image-checkbox";

/**
 * A custom image checkbox component.
 */
const meta: Meta<typeof ImageCheckbox> = {
  title: "custom/ImageCheckbox",
  component: ImageCheckbox,
  tags: ["autodocs"],
  args: {
    value: "checkbox",
  },
  argTypes: {
    type: {
      options: ["checkbox", "radio"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageCheckbox>;

/**
 * The default form of the image checkbox.
 */
export const Default: Story = {
  render: (args) => (
    <ImageCheckbox
      {...args}
      label="Checkbox"
      image="https://via.placeholder.com/32"
    />
  ),
};

const multipleData = [
  {
    label: "Checkbox 1",
    value: "checkbox1",
    image: "https://via.placeholder.com/32",
    isChecked: true,
  },
  {
    label: "Checkbox 2",
    value: "checkbox2",
    image: "https://via.placeholder.com/32",
    isChecked: false,
  },
  {
    label: "Checkbox 3",
    value: "checkbox3",
    image: "https://via.placeholder.com/32",
    isChecked: false,
  },
];

/**
 * Multiple image checkboxes.
 */
export const Multiple: Story = {
  render: (args) => (
    <div className="flex gap-4">
      {multipleData.map((data) => (
        <ImageCheckbox
          key={data.value}
          {...args}
          {...{
            label: data.label,
            name: data.value,
            value: data.value,
            image: data.image,
            defaultChecked: data.isChecked,
            onChange: () => {
              console.log("Changed");
            },
          }}
        />
      ))}
    </div>
  ),
};
