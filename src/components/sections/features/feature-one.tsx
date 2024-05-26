// Layout

// Icons
import { Coins } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface FeatureText {
  icon: JSX.Element;
  title: string;
  description: string;
}

const featureText: FeatureText[] = [
  {
    icon: <Coins className="size-6" />,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Coins className="size-6" />,
    title: "Lorem Ipsum",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <Coins className="size-6" />,
    title: "Lorem Ipsum",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Feature = () => {
  return (
    <MuiLayout.Section className="border-b">
      <MuiLayout.Container className="not-prose">
        <div className="flex flex-col gap-6">
          <Heading className="text-balance text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Heading>
          <Heading
            level={4}
            className="text-balance text-2xl font-light opacity-70"
          >
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Heading>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <Heading level={4} className="text-xl text-primary">
                  {title}
                </Heading>
                <Text className="text-base opacity-75">{description}</Text>
              </div>
            ))}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Feature;
