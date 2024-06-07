import Link from "next/link";

import { Check } from "lucide-react";

// Components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface Deal {
  name: string;
  description: string;
  price: string;
  type: string;
  features: { text: string; bold?: string }[];
}

const deals: Deal[] = [
  {
    name: "Starter",
    description: "Best option for personal use and for your next project.",
    price: "$29",
    type: "/month",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: "Team size: ", bold: "1 developer" },
      { text: "Premium support: ", bold: "6 months" },
      { text: "Free updates: ", bold: "6 months" },
    ],
  },
  {
    name: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    type: "/month",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: "Team size: ", bold: "10 developer" },
      { text: "Premium support: ", bold: "24 months" },
      { text: "Free updates: ", bold: "24 months" },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    type: "/month",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: "Team size: ", bold: "100+ developer" },
      { text: "Premium support: ", bold: "36 months" },
      { text: "Free updates: ", bold: "36 months" },
    ],
  },
];

export function DefaultPricingCards() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Designed for business teams like yours
          </Heading>
          <Text className="mb-5 font-light text-muted-foreground sm:text-xl">
            Here we focus on markets where technology, innovation, and capital
            can unlock long-term value and drive economic growth.
          </Text>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {deals.map((deal, index) => (
            <Card
              key={index}
              className="flex flex-col rounded-lg border p-6 text-center shadow dark:bg-muted"
            >
              <CardHeader className="p-0">
                <Heading
                  level={3}
                  className="mb-4 text-2xl font-semibold tracking-normal"
                >
                  {deal.name}
                </Heading>
                <Text className="font-light text-muted-foreground sm:text-lg">
                  {deal.description}
                </Text>
              </CardHeader>
              <CardContent className="p-0">
                <div className="my-8 flex items-baseline justify-center">
                  <Text>
                    <span className="mr-2 text-5xl font-extrabold">
                      {deal.price}
                    </span>{" "}
                    <span className="text-muted-foreground">{deal.type}</span>
                  </Text>
                </div>
                <ul className="mb-8 space-y-4">
                  {deal.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center space-x-3"
                    >
                      <Check className="size-5 shrink-0 text-green-500 dark:text-green-400" />
                      <Text>
                        {feature.text}{" "}
                        {feature?.bold && (
                          <span className="font-semibold">{feature.bold}</span>
                        )}
                      </Text>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button className="w-full py-2.5">
                  <Link
                    href="/#"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-center text-sm font-medium focus:outline-none focus:ring-4 "
                  >
                    Get started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
