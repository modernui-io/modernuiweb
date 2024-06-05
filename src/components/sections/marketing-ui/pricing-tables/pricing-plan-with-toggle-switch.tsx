import Link from "next/link";

import { FaCheckCircle } from "react-icons/fa";

// Components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Switch } from "~/components/ui/switch";

const packages = [
  {
    id: "freelancer-plan",
    name: "FREELANCER",
    price: "$49",
    type: "/month",
    description:
      "Best option for personal use and for your next side projects.",
    features: [
      "All tools you need to manage payments",
      "No setup, monthly, or hidden fees",
    ],
  },
  {
    id: "company-plan",
    name: "COMPANY",
    price: "$199",
    type: "/month",
    description:
      "Best option for personal use and for your next side projects.",
    features: [
      "All tools you need to manage payments",
      "No setup, monthly, or hidden fees",
      "Comprehensive security and rigorous",
      "Get hundreds of feature updates",
    ],
  },
  {
    id: "enterprise-plan",
    name: "ENTERPRISE",
    price: "$999",
    type: "/month",
    description:
      "Best option for personal use and for your next side projects.",
    features: [
      "All tools you need to manage payments",
      "No setup, monthly, or hidden fees",
      "Comprehensive security and rigorous",
      "Get hundreds of feature updates",
      "Payouts to your bank accounts",
      "Financial reconciliation",
      "24/7chat and email support",
      "Robust developer platform",
    ],
  },
];

export function PricingPlanWithToggleSwitch() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Designed for business teams like yours
          </Heading>
          <Text className="mb-5 font-light text-muted-foreground sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Text>
          <div className="flex items-center">
            <Text className="text-base font-medium">Monthly</Text>
            <Switch className="mx-4" />

            <Text className="text-base font-medium text-muted-foreground">
              Yearly
            </Text>
          </div>
        </div>
        <div className="mb-4 space-y-8 md:gap-12 lg:mb-8 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-16">
          {packages.map((data, index) => (
            <div key={data.id} className="flex max-w-lg flex-col">
              <h3 className="font-semibold uppercase text-muted-foreground">
                {data.name}
              </h3>
              <div className="my-4 flex items-baseline">
                <Text className="mr-2 text-5xl font-extrabold">
                  {data.price}
                </Text>
                <Text className="text-muted-foreground">{data.type}</Text>
              </div>
              <Text className="font-light text-muted-foreground sm:text-lg">
                {data.description}
              </Text>

              <ul className="my-8 space-y-4 text-left">
                {data.features.map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="size-4 shrink-0 text-green-500"></FaCheckCircle>
                    <Text>{feature}</Text>
                  </li>
                ))}
              </ul>
              <Button className="h-auto w-full bg-primary px-5 py-2.5">
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-lg text-center text-sm font-medium focus:outline-none focus:ring-4"
                >
                  Get started
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
