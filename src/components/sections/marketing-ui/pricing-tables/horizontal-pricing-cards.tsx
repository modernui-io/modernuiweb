import Link from "next/link";

import { MoveRight } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

// Components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

type Features = string[][];

const featureLists: Features = [
  [
    "A/B Testing",
    "24/7 Chat Support",
    "Custom Branding",
    "Creative Assistant",
    "Website Builder",
  ],
  [
    "Customer Builder",
    "Marketing CRM",
    "Custom Templates",
    "Create Assistant",
    "Multivariate Testing",
  ],
  [
    "Advanced Tools",
    "Multivariate Testing",
    "Reporting",
    "Custom Templates",
    "Dynamic Content",
  ],
];

export function HorizontalPricingCards() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <Card className="rounded-lg border-0 shadow">
          <CardContent className="p-0 lg:grid lg:grid-cols-3">
            <div className="col-span-2 bg-background p-6 dark:bg-secondary lg:p-8">
              <Heading
                level={3}
                className="mb-1 text-wrap text-2xl font-bold tracking-tight"
              >
                Pricing built for all businesses.
              </Heading>
              <Text className="text-lg font-light text-muted-foreground">
                Best for large scale uses and extended redistribution rights.
              </Text>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-6">
                {featureLists.map((featureList, index) => (
                  <ul
                    key={index}
                    className={`space-y-4 text-tremor-content-strong ${index !== 0 ? "hidden sm:block" : ""}`}
                  >
                    {featureList.map((feature, index) => (
                      <li key={index} className="flex space-x-2.5">
                        <FaCheckCircle className="size-4 shrink-0 text-green-500" />
                        <span className="leading-tight text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex bg-primary-100 p-6 text-center shadow dark:bg-primary-200 lg:p-8">
              <div className="w-full self-center">
                <Heading
                  level={"mdDisplay"}
                  className="text-5xl font-extrabold"
                >
                  $99
                </Heading>
                <Text className=" mb-4 mt-1 text-muted-foreground">
                  per month
                </Text>

                <Button className="h-auto w-full bg-primary px-5 py-2.5">
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-lg text-center text-sm font-medium focus:outline-none focus:ring-4"
                  >
                    Buy now
                  </Link>
                </Button>

                <Link
                  href="/#"
                  className="mt-4 flex items-center justify-center font-medium text-muted-foreground hover:text-muted-foreground/70"
                >
                  View team pricing
                  <MoveRight className="size-5 sm:ml-2" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
