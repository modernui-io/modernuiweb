import Link from "next/link";

// Components
import { MoveRight } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
import { HiCreditCard, HiFire, HiPresentationChartBar } from "react-icons/hi";
import { HiMiniCube } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiPaperPlaneFill } from "react-icons/pi";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Switch } from "~/components/ui/switch";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "$19 USD per month, paid annually",
    popular: false,
    features: [
      {
        icon: HiCreditCard,
        text: "All tools you need to manage payments",
        lineThrough: false,
      },
      {
        icon: FaSmile,
        text: "No setup, monthly, or hidden fees",
        lineThrough: false,
      },
      {
        icon: IoShieldCheckmark,
        text: "Comprehensive security",
        lineThrough: false,
      },
      {
        icon: PiPaperPlaneFill,
        text: "Get hundreds of feature updates",
        lineThrough: true,
      },
      {
        icon: HiFire,
        text: "Payouts to your bank account",
        lineThrough: true,
      },
      {
        icon: HiPresentationChartBar,
        text: "Financial reconciliation and reporting",
        lineThrough: true,
      },
      {
        icon: AiFillMessage,
        text: "24×7 phone, chat, and email support",
        lineThrough: true,
      },
      {
        icon: HiMiniCube,
        text: "Robust developer platform",
        lineThrough: true,
      },
    ],
  },
  {
    name: "Premium",
    price: "$199",
    description: "$159 USD per month, paid annually",
    popular: true,
    features: [
      {
        icon: HiCreditCard,
        text: "All tools you need to manage payments",
        lineThrough: false,
      },
      {
        icon: FaSmile,
        text: "No setup, monthly, or hidden fees",
        lineThrough: false,
      },
      {
        icon: IoShieldCheckmark,
        text: "Comprehensive security",
        lineThrough: false,
      },
      {
        icon: PiPaperPlaneFill,
        text: "Get hundreds of feature updates",
        lineThrough: false,
      },
      {
        icon: HiFire,
        text: "Payouts to your bank account",
        lineThrough: false,
      },
      {
        icon: HiPresentationChartBar,
        text: "Financial reconciliation and reporting",
        lineThrough: true,
      },
      {
        icon: AiFillMessage,
        text: "24×7 phone, chat, and email support",
        lineThrough: true,
      },
      {
        icon: HiMiniCube,
        text: "Robust developer platform",
        lineThrough: true,
      },
    ],
  },
  {
    name: "Enterprise",
    price: "$599",
    description: "$459 USD per month, paid annually",
    popular: false,
    features: [
      {
        icon: HiCreditCard,
        text: "All tools you need to manage payments",
        lineThrough: false,
      },
      {
        icon: FaSmile,
        text: "No setup, monthly, or hidden fees",
        lineThrough: false,
      },
      {
        icon: IoShieldCheckmark,
        text: "Comprehensive security",
        lineThrough: false,
      },
      {
        icon: PiPaperPlaneFill,
        text: "Get hundreds of feature updates",
        lineThrough: false,
      },
      {
        icon: HiFire,
        text: "Payouts to your bank account",
        lineThrough: false,
      },
      {
        icon: HiPresentationChartBar,
        text: "Financial reconciliation and reporting",
        lineThrough: false,
      },
      {
        icon: AiFillMessage,
        text: "24×7 phone, chat, and email support",
        lineThrough: false,
      },
      {
        icon: HiMiniCube,
        text: "Robust developer platform",
        lineThrough: false,
      },
    ],
  },
];

export function HighlightedPricingPlan() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Designed for business teams like yours
          </Heading>
          <Text className="mb-5 font-light text-muted-foreground sm:text-xl">
            Here at Modern UI we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Text>
          <div className="flex items-center justify-center">
            <Text className="text-base font-medium text-primary">Monthly</Text>
            <Switch className="mx-4" />
            <Text className="text-base font-medium text-muted-foreground">
              Yearly
            </Text>
          </div>
        </div>

        <Card className="grid gap-8 border-none shadow-none xl:grid-cols-3 xl:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`mx-auto flex max-w-xl flex-col rounded-lg border ${plan.popular ? "border-primary" : "border-muted"} bg-background p-6 text-center shadow dark:bg-muted xl:max-w-lg xl:p-8`}
            >
              {plan.popular && (
                <div className="mb-2">
                  <Text className="inline rounded bg-primary/10 px-3 py-1 text-sm text-primary ">
                    Most popular
                  </Text>
                </div>
              )}
              <Heading
                level={3}
                className="mb-4 text-2xl font-medium text-primary"
              >
                {plan.name}
              </Heading>
              <Text className="text-5xl font-extrabold text-primary">
                {plan.price}
              </Text>
              <Text className="mb-1 mt-4 text-muted-foreground">
                {plan.description}
              </Text>
              <Link
                href="/#"
                className="inline-flex items-center justify-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
              >
                Go to annual plan
                <MoveRight className="ml-2 size-5" />
              </Link>
              <Button
                className={`my-8 h-auto w-full px-5 py-2.5 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary-foreground dark:bg-primary-300"
                }`}
              >
                <Link
                  href="/#"
                  className={`rounded-lg text-center text-sm font-medium ${
                    plan.popular
                      ? "text-primary-foreground"
                      : "text-tremor-content-inverted"
                  }`}
                >
                  Get started
                </Link>
              </Button>
              <ul className="space-y-4 text-left">
                {plan.features?.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center space-x-3"
                  >
                    <feature.icon
                      className={`size-5 shrink-0 ${feature.lineThrough ? "text-secondary-foreground/40" : ""}`}
                    ></feature.icon>
                    <Text
                      className={`${feature.lineThrough ? "text-secondary-foreground/40 line-through" : ""}`}
                    >
                      {feature.text}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
