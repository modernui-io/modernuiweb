// Layout
import type { Route } from "next";
import Link from "next/link";

// Icons
import { ArrowRight, Coins } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface FeatureText {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
}

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
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

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}` as Route<"string">}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <Heading level={4} className="text-xl text-primary">
                      {title}
                    </Heading>
                    <Text className="text-base opacity-75">{description}</Text>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <Text>{cta}</Text> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Feature;
