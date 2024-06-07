import Link from "next/link";

import { MoveRight } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

interface Deal {
  name: string;
  price: string;
  title: string;
  descHeading: string;
  desc: string;
}

enum DealType {
  Starter = "Starter",
  Standard = "Standard",
  Premium = "Premium",
  Enterprise = "Enterprise",
}

const deals: Deal[] = [
  {
    name: DealType.Starter,
    price: "$49",
    title: "Starter Plan",
    descHeading: "Starter details",
    desc: "Plan pricing starts at 250 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.",
  },
  {
    name: DealType.Standard,
    price: "$99",
    title: "Standard Plan",
    descHeading: "Standard details",
    desc: "Plan pricing starts at 500 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.",
  },
  {
    name: DealType.Premium,
    price: "$149",
    title: "Premium Plan",
    descHeading: "Premium details",
    desc: "Plan pricing starts at 1000 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.",
  },
  {
    name: DealType.Enterprise,
    price: "$249",
    title: "Enterprise Plan",
    descHeading: "Enterprise details",
    desc: "Plan pricing starts at unlimited contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count.*.",
  },
];

export function TabsSelectorPricingCards() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <Tabs
          defaultValue={DealType.Starter}
          className="divide-y rounded-lg bg-background shadow dark:divide-primary-300  dark:bg-secondary lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0"
        >
          <div className="col-span-2  border-0 bg-background p-6 dark:bg-secondary lg:p-8">
            <Heading level={5} className="mb-4 text-lg font-medium ">
              Choose a pricing plan:
            </Heading>

            <div className="h-auto w-full md:rounded-lg">
              <TabsList className="grid h-auto w-full grid-cols-2 bg-background p-0 dark:bg-primary-300 sm:grid-cols-4">
                {deals.map((deal) => (
                  <TabsTrigger
                    key={deal.name}
                    value={deal.name}
                    className="w-full rounded-none border bg-secondary/70 p-4 text-center dark:border-primary-300 md:first:rounded-l-lg md:last:rounded-r-lg"
                  >
                    {deal.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {deals.map((deal) => (
                <TabsContent
                  key={deal.name}
                  // className="mt-6 sm:mt-2"
                  value={deal.name}
                >
                  <Text className="mb-2 mt-6 font-medium">
                    {deal.descHeading}
                  </Text>
                  <Text className="text-lg font-light text-muted-foreground">
                    {deal.desc}
                  </Text>
                </TabsContent>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-0 bg-background p-6  dark:bg-secondary lg:p-8">
            {deals.map((deal) => (
              <TabsContent
                value={deal.name}
                key={`tabs-content-${deal.name}`}
                className={"w-full self-center"}
              >
                <Text className="mb-4 text-2xl font-medium">
                  {deal.name} plan
                </Text>
                <Text className="font-light text-muted-foreground">
                  Starts at
                </Text>
                <Text className="mb-4 text-5xl font-extrabold">
                  {deal.price}
                </Text>
                <Button className="mb-4 h-auto w-full px-5 py-2.5">
                  <Link
                    href="/#"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-center text-sm font-medium focus:outline-none focus:ring-4 "
                  >
                    Buy Now
                  </Link>
                </Button>
                <Link href="/#" className="mb-4 flex items-center font-medium">
                  View team pricing
                  <MoveRight className="size-5 sm:ml-2" />
                </Link>
                <Text className="text-sm text-muted-foreground">
                  *To see the monthly email send limit included with your
                  specific plan, click Calculate my price. If your plan&apos;s
                  contact or email send limit is exceeded, you will be charged
                  for overages.
                </Text>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
