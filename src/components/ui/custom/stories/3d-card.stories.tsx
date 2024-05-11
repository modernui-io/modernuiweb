import type { Meta, StoryObj } from "@storybook/react";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "~/components/ui/custom/3d-card";

/**
 * A 3D card component.
 */
const meta: Meta<typeof CardContainer> = {
  title: "custom/3D Card",
  component: CardContainer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardContainer>;

/**
 * The default form of the 3D card.
 */
export const Default: Story = {
  render: (args) => (
    <CardContainer {...args}>
      <CardItem
        translateX={-50}
        translateY={-50}
        translateZ={-50}
        rotateX={-50}
        rotateY={50}
        rotateZ={50}
      >
        <CardBody className="bg-blue-400">
          <h1 className="text-white">Card</h1>
        </CardBody>
      </CardItem>
      <CardItem
        translateX={50}
        translateY={50}
        translateZ={50}
        rotateX={50}
        rotateY={-50}
        rotateZ={-50}
      >
        <CardBody className="bg-green-400">
          <h1 className="text-white">Card</h1>
        </CardBody>
      </CardItem>
    </CardContainer>
  ),
};
